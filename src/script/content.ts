import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import matter from 'gray-matter';
import { sortByName } from '../util/sort.js';
import { processMarkdownPaths } from '../util/format.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BLOG_TABLE_PATH = path.join(__dirname, '../assets/data/blogTable.json');
const BLOG_FOLDER_PATH = path.join(__dirname, '../../content');
const CONTENT_FOLDER_PATH = path.join(__dirname, '../../public/content');

export interface BlogTable {
  tableName: string;
  list: Blog[];
}

export interface Blog {
  name: string;
  path: string;
  content: string;
  author: string | null;
  date: string | null;
  tags: string[] | null;
}

const readMarkdownFile = async (filePath: string): Promise<Blog> => {
  marked.use({ mangle: false, headerIds: false });
  const fileName = path.basename(filePath, path.extname(filePath));
  const page = await fs.promises.readFile(filePath, 'utf-8');
  const { data, content } = matter(page);

  const htmlContent = marked.parse(processMarkdownPaths(content));

  const newBlog: Blog = {
    path: path.relative(BLOG_FOLDER_PATH, filePath).replace(/\\/g, '/').replace(/\.md/, '.html'),
    name: data.name || fileName,
    content: htmlContent,
    author: data.author || null,
    date: data.date || null,
    tags: data.tags || null,
  };
  return newBlog;
};

const batchConvertToHTML = async (folderPath: string): Promise<void> => {
  const files = await fs.promises.readdir(folderPath);
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(folderPath, file);
      const blog = await readMarkdownFile(filePath);
      await fs.promises.writeFile(filePath, blog.content);
      await fs.promises.rename(filePath, path.join(folderPath, blog.name + '.html'));
    }
  }
};

const createContent = async (): Promise<void> => {
  try {
    await fs.promises.rm(CONTENT_FOLDER_PATH, { force: true, recursive: true });
    await fs.promises.mkdir(CONTENT_FOLDER_PATH, { recursive: true });
    await fs.promises.cp(BLOG_FOLDER_PATH, CONTENT_FOLDER_PATH, { recursive: true });

    const files = await fs.promises.readdir(CONTENT_FOLDER_PATH);
    for (const file of files) {
      const filePath = path.join(CONTENT_FOLDER_PATH, file);
      const stat = await fs.promises.stat(filePath);
      if (stat.isDirectory()) {
        await batchConvertToHTML(filePath);
      }
    }
    console.log('Content created successfully');
  } catch (error) {
    console.log('Content creation failed: ' + error);
  }
};

const createTable = async (): Promise<void> => {
  try {
    const tables: BlogTable[] = [];
    const folders = await fs.promises.readdir(BLOG_FOLDER_PATH);
    for (const folder of folders) {
      const folderPath = path.join(BLOG_FOLDER_PATH, folder);
      const folderStat = await fs.promises.stat(folderPath);

      if (!folderStat.isDirectory()) continue;

      const list: Blog[] = [];
      const files = await fs.promises.readdir(folderPath);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const filePath = path.join(folderPath, file);
          const blog = await readMarkdownFile(filePath);
          list.push(blog);
        }
      }

      const newTable: BlogTable = {
        tableName: folder,
        list,
      };
      tables.push(newTable);
    }
    tables.sort((a, b) => sortByName(a.tableName, b.tableName));
    await fs.promises.writeFile(BLOG_TABLE_PATH, JSON.stringify(tables));
    console.log('Table created successfully');
  } catch (error) {
    console.log('Table creation failed: ' + error);
  }
};

const createData = async (): Promise<void> => {
  try {
    await createContent();
    await createTable();
  } catch (error) {
    console.log('Data creation failed: ' + error);
  }
};

export default createData;

createData();
