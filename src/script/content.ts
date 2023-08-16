import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { CefresMD } from '../lib/markdown/index.ts';
import matter from 'gray-matter';
import { sortBlogList } from '../util/sort.js';
import { Blog, BlogRecord, BlogTable } from '../interfaces/blogDataTypes.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BLOG_TABLE_PATH = path.resolve(__dirname, '../assets/data/blogIndex.js');
const BLOG_FOLDER_PATH = path.resolve(__dirname, '../../content');
const CONTENT_FOLDER_PATH = path.resolve(__dirname, '../../public/content');
const RECORD_FOLDER_PATH = path.resolve(__dirname, '../../public/record');

const readMarkdownFile = async (filePath: string): Promise<Blog> => {
  const fileName = path.basename(filePath, path.extname(filePath));
  const page = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(page);

  data.title = data.title || fileName;
  const htmlContent = CefresMD.render(content, { path: filePath });

  const newBlog: Blog = {
    frontMatter: data,
    content: htmlContent,
  };
  return newBlog;
};

const createContent = async (tables: BlogTable[]): Promise<void> => {
  try {
    await fs.rm(CONTENT_FOLDER_PATH, { force: true, recursive: true });
    await fs.rm(RECORD_FOLDER_PATH, { force: true, recursive: true });
    await fs.mkdir(CONTENT_FOLDER_PATH, { recursive: true });
    await fs.mkdir(RECORD_FOLDER_PATH, { recursive: true });

    for (const table of tables) {
      const contentTablePath = path.join(CONTENT_FOLDER_PATH, table.name);
      const recordTablePath = path.join(RECORD_FOLDER_PATH, table.name)
      fs.mkdir(contentTablePath);
      fs.mkdir(recordTablePath);
      fs.cp(path.join(BLOG_FOLDER_PATH, table.name, 'assets'), path.join(contentTablePath, 'assets'), { recursive: true });
      for (const blog of table.blogList) {
        const filePath = path.join(BLOG_FOLDER_PATH, `${blog.path}.md`)
        const contentPath = path.join(CONTENT_FOLDER_PATH, `${blog.path}.html`);
        const infoPath = path.join(RECORD_FOLDER_PATH, `${blog.path}.json`);
        const data: Blog = await readMarkdownFile(filePath);

        fs.writeFile(contentPath, data.content);
        fs.writeFile(infoPath, JSON.stringify(data.frontMatter));
      }
    }
    console.log('Content created successfully');
  } catch (error) {
    console.error('Content creation failed: ' + error);
  }
};

const createTable = async (): Promise<BlogTable[] | undefined> => {
  try {
    const tables: BlogTable[] = [];
    const folders = await fs.readdir(BLOG_FOLDER_PATH);
    for (const folder of folders) {
      const folderPath = path.resolve(BLOG_FOLDER_PATH, folder);
      const folderStat = await fs.stat(folderPath);

      if (!folderStat.isDirectory()) continue;

      const files = await fs.readdir(folderPath);
      //判断文件夹内部有无.md文件
      if (files.filter(file => path.extname(file).toLowerCase() === '.md').length === 0) continue;

      const list: BlogRecord[] = [];
      for (const file of files) {
        if (file.endsWith('.md')) {
          const filePath = path.resolve(folderPath, file);
          const relativePath = path.relative(BLOG_FOLDER_PATH, filePath).replace(/\\+/g, "/").replace(/\.md/, '');
          const blog = await readMarkdownFile(filePath);
          const newBlogRecord: BlogRecord = {
            name: blog.frontMatter.title || path.basename(file, path.extname(file)),
            index: blog.frontMatter.index,
            path: relativePath,
          };
          list.push(newBlogRecord);
        }
      }
      list.sort(sortBlogList);

      const newTable: BlogTable = {
        name: folder,
        blogList: list,
      };
      tables.push(newTable);
    }

    const tableTemplate =
      `export const BlogIndex = ${JSON.stringify(tables)}`
    await fs.writeFile(BLOG_TABLE_PATH, tableTemplate);
    console.log('Table created successfully');
    return tables;
  } catch (error) {
    console.error('Table creation failed: ' + error);
  }
};

export const createData = async (): Promise<void> => {
  try {
    const tables = await createTable() as BlogTable[];
    await createContent(tables);
  } catch (error) {
    console.error('Data creation failed: ' + error);
  }
};

createData();
