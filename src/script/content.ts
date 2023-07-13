import { promises as fsPromises } from 'fs';
import { basename, join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';
import MarkdownIt from 'markdown-it';
import { sortByName } from '../util/sort.js';
import { processMarkdownPaths } from '../util/format.js';

const __dirname = dirname(fileURLToPath(import.meta.url))

const BLOG_TABLE_PATH = join(__dirname, '../assets/data/blogTable.json')
const BLOG_FOLDER_PATH = join(__dirname, '../../content');
const CONTENT_FOLDER_PATH = join(__dirname, '../../public/content');

/**
 * @member name:string
 * @member list:string[]
 */
export interface BlogTable {
  tableName: string,
  list: string[],
}

/**
 * @member name:string
 * @member content:string
 */
export interface Blog {
  name: string,
  content: string,
}

/**
 * @description 读取该路径下的.md文件
 * @param filepath:string
 * @returns Promise<Blog | Error>
 */
export const readMarkDownfile = async (filePath: string): Promise<Blog | Error> => {
  try {
    let md = new MarkdownIt("commonmark", {
      html: true,
      linkify: true,
    });
    const fileName = basename(filePath, extname(filePath));
    const markdownContent = await fsPromises.readFile(filePath, 'utf-8');
    const htmlContent = md.render(processMarkdownPaths(markdownContent));

    const newblog: Blog = {
      name: fileName,
      content: htmlContent
    };
    return newblog;
  } catch (error) {
    return new Error('Failed to read Markdown file ' + filePath);
  }
}

/**
 * @description 将选中文件夹中的.md文件转化为html文件
 */
const batchConvertToHTML = async (folderPath: string): Promise<void> => {
  const files = await fsPromises.readdir(folderPath);
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = join(folderPath, file);
      const blog = await readMarkDownfile(filePath) as Blog;
      await fsPromises.writeFile(filePath, blog.content);
      await fsPromises.rename(filePath, join(folderPath, blog.name + '.html'));
    }
  }
}

/**
 * @description 创建内容
 */
const createContent = async (): Promise<void> => {
  try {
    await fsPromises.rm(CONTENT_FOLDER_PATH, { force: true, recursive: true });
    await fsPromises.mkdir(CONTENT_FOLDER_PATH);
    await fsPromises.cp(BLOG_FOLDER_PATH, CONTENT_FOLDER_PATH, { recursive: true });

    const files = await fsPromises.readdir(CONTENT_FOLDER_PATH);
    for (const file of files) {
      const filePath = join(CONTENT_FOLDER_PATH, file);
      const stat = await fsPromises.stat(filePath);
      if (stat.isDirectory()) {
        await batchConvertToHTML(filePath);
      }
    }
    console.log('Content created successfully')
  } catch (error) {
    console.log("Content created failed")
  }
}


/**
 * @description 创建目录
 */
const createTable = async () => {
  try {
    let tables: BlogTable[] = [];
    const folders = await fsPromises.readdir(CONTENT_FOLDER_PATH);
    for (const folder of folders) {
      const folderPath = join(CONTENT_FOLDER_PATH, folder);
      const folderStat = await fsPromises.stat(folderPath);

      //遍历这个文件夹，填充blogList博客名字列表
      let blogList: string[] = [];
      if (folderStat.isDirectory()) {
        const files = await fsPromises.readdir(folderPath);
        for (const file of files) {
          if (file.endsWith('.html')) {
            blogList.push(file);
          }
        }
      } else continue;
      blogList.sort(sortByName);

      //name为文件夹名字，list为博客名字（带后缀）列表
      const newTable: BlogTable = {
        tableName: folder,
        list: blogList
      }
      tables.push(newTable);
    }
    tables.sort((a, b) => {
      return sortByName(a.tableName, b.tableName);
    })
    await fsPromises.writeFile(BLOG_TABLE_PATH, JSON.stringify(tables));
    console.log("Table created successfully")
  } catch (error) {
    console.log("Table created failed")
  }
}


const createData = async (): Promise<void> => {
  await createContent();
  await createTable();
}

export default createData

createData()