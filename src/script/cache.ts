import { promises as fsPromises } from 'fs';
import { basename , join ,extname, dirname} from 'path';
import { marked } from 'marked';
import { fileURLToPath } from 'url';

const __dirname =dirname(fileURLToPath(import.meta.url))
const BLOG_CACHE_PATH=join(__dirname,'../../public/data/blogCache.json')
const TREE_CACHE_PATH=join(__dirname,'../../public/data/treeCache.json')
const BLOG_FOLDER_PATH=join(__dirname,'../../content')

/**
 * @description:储存树结构
 */
interface FileNode {
    name:string,
    createDate:Date,
	isDir:boolean,
    children?:FileNode[],
}

/**
 * @description:储存博客的详细信息
 */
interface Blog{
    path:string,
    title:string,
    createDate:Date,
    content:string,
}

/**
 * @description 读取该路径下的.md文件
 * @param filepath:string
 * @returns Promise<Blog | Error>
 */
const readMarkDownfile = async (filepath: string): Promise<Blog | Error> =>{
    try {
        marked.setOptions({mangle: false,headerIds: false});
        const fileName = basename(filepath);
        const { birthtime } = await fsPromises.stat(filepath);
        const markdownContent = await fsPromises.readFile(filepath, 'utf-8');
        const htmlContent = marked(markdownContent);

        const  newblog : Blog = {
          path:filepath,
          title: fileName,
          createDate: birthtime,
          content: htmlContent
        };
        return newblog;
      } catch (error) {
        return new Error('Failed to read Markdown file');
      }
}

/**
 * @description 读取博客文件夹结构写入到指定路径的json文件中
 */
const createTreeCache = async () => {
    try {
        const fileTree = await traverseFolder(BLOG_FOLDER_PATH);

        const sortedFileTree = sortFileTree(fileTree);

        const fileTreeJson = JSON.stringify(sortedFileTree, null, 2);

        await fsPromises.writeFile(TREE_CACHE_PATH, fileTreeJson);

        console.log('File tree cache created successfully.');
    } catch (error) {
        console.error('Failed to create file tree cache:', error);
    }
};

/**
 * @description 读取博客文件夹的所有.md数据写入到指定路径的json文件中
 */
const createBlogCache = async () => {
    try {
      const blogList = await traverseBlogFiles(BLOG_FOLDER_PATH);
  
      const sortedBlogList = sortBlogList(blogList);
  
      const blogListJson = JSON.stringify(sortedBlogList, null, 2);
  
      await fsPromises.writeFile(BLOG_CACHE_PATH, blogListJson);
  
      console.log('Blog cache created successfully.');
    } catch (error) {
      console.error('Failed to create blog cache:', error);
    }
  };
  
/**
 * @description 对某一路径的文件夹进行递归读取
 * @param folderPath:string
 * @returns Promise<fileNode[]>
 */
const traverseFolder = async (folderPath: string): Promise<FileNode[]> => {
    const files = await fsPromises.readdir(folderPath);
  
    const fileNodes: FileNode[] = [];
  
    for (const file of files) {
      const filePath = join(folderPath, file);
  
      const stat = await fsPromises.stat(filePath);
  
      const node: FileNode = {
        name: file,
        createDate: stat.birthtime,
        isDir: stat.isDirectory()
      };

      if (node.isDir) {
        node.children = await traverseFolder(filePath);
      }
  
      fileNodes.push(node);
    }
  
    return fileNodes;
  };

/**
 * @description 对文件树进行排序
 * @param fileTree 
 * @returns fileNode[]
 */
const sortFileTree = (fileTree: FileNode[]): FileNode[] => {
    return fileTree.sort((a, b) => {
        // 文件夹在前，.md 文件在后
        if (a.isDir && !b.isDir) {
        return -1;
        }
        if (!a.isDir && b.isDir) {
        return 1;
        }

        // 中文按照第一个字的发音字母排序
        if (/[\u4E00-\u9FFF]/.test(a.name[0]) && /[\u4E00-\u9FFF]/.test(b.name[0])) {
        return a.name.localeCompare(b.name, 'zh');
        }

        // 英文按照字母排序
        return a.name.localeCompare(b.name);
    });
};

const traverseBlogFiles = async (folderPath: string): Promise<Blog[]> => {
    const files = await fsPromises.readdir(folderPath);

    const blogList: Blog[] = [];

    for (const file of files) {
        const filePath = join(folderPath, file);

        const stat = await fsPromises.stat(filePath);

        if (stat.isDirectory()) {
            const subBlogList = await traverseBlogFiles(filePath);
            blogList.push(...subBlogList);
            } else if (extname(file) === '.md') {
            const blog = await readMarkDownfile(filePath);
            if (blog instanceof Error) {
                console.error('Failed to read Markdown file:', filePath);
            } else {
                blogList.push(blog);
            }
        }
    }

    return blogList;
};

/**
 * @description 对博客列表进行排序
 * @param blogList 
 * @returns Blog[]
 */
const sortBlogList = (blogList: Blog[]): Blog[] => {
    return blogList.sort((a, b) => {
        return a.createDate.getTime() - b.createDate.getTime();
    });
};

const createDataCache = async (): Promise<void>=>{
	await createTreeCache();
	await createBlogCache();
}

export default createDataCache
createDataCache()
