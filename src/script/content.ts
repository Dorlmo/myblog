import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import matter from 'gray-matter';
import { convert } from 'html-to-text';
import { sortBlogList } from '../util/sort.js';
import { processMarkdownPaths } from '../util/format.js';
import { Blog, Post, BlogTable } from '../interfaces/blogDataTypes.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BLOG_TABLE_PATH = path.resolve(__dirname, '../assets/data/blogTable.json');
const BLOG_FOLDER_PATH = path.resolve(__dirname, '../../content');
const CONTENT_FOLDER_PATH = path.resolve(__dirname, '../../public/content');

const readMarkdownFile = async (filePath: string): Promise<Blog> => {
  marked.use({ mangle: false, headerIds: false });
  const fileName = path.basename(filePath, path.extname(filePath));
  const page = await fs.readFile(filePath, 'utf-8');
  const { data, content } = matter(page);

  data.title = data.title || fileName;
  const htmlContent = marked.parse(processMarkdownPaths(content));

  const newBlog: Blog = {
    frontMatter: data,
    content: htmlContent,
  };
  return newBlog;
};

const convertMarkdownToHTML = async (folderPath: string) => {
  const files = await fs.readdir(folderPath);
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.resolve(folderPath, file);
      const fileName = path.basename(filePath, path.extname(filePath));
      const blog = await readMarkdownFile(filePath);
      await fs.writeFile(filePath, blog.content);
      await fs.rename(filePath, path.resolve(folderPath, fileName + '.html'));
    }
  }
};

const createContent = async (): Promise<void> => {
  try {
    await fs.rm(CONTENT_FOLDER_PATH, { force: true, recursive: true });
    await fs.mkdir(CONTENT_FOLDER_PATH, { recursive: true });
    await fs.cp(BLOG_FOLDER_PATH, CONTENT_FOLDER_PATH, { recursive: true });

    const files = await fs.readdir(CONTENT_FOLDER_PATH);
    for (const file of files) {
      const filePath = path.resolve(CONTENT_FOLDER_PATH, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        await convertMarkdownToHTML(filePath);
      }
    }
    console.log('Content created successfully');
  } catch (error) {
    console.error('Content creation failed: ' + error);
  }
};

const createTable = async (): Promise<void> => {
  try {
    const tables: BlogTable[] = [];
    const folders = await fs.readdir(BLOG_FOLDER_PATH);
    for (const folder of folders) {
      const folderPath = path.resolve(BLOG_FOLDER_PATH, folder);
      const folderStat = await fs.stat(folderPath);

      if (!folderStat.isDirectory()) continue;

      const list: Post[] = [];
      const files = await fs.readdir(folderPath);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const filePath = path.resolve(folderPath, file);
          const blog = await readMarkdownFile(filePath);
          const newPost: Post = {
            name: path.basename(file, path.extname(file)),
            path: path.relative(BLOG_FOLDER_PATH, filePath).replace(/\\/g, '/').replace(/\.md/, '.html'),
            texts: convert(blog.content,
              {
                selectors: [
                  { selector: 'img', format: 'skip' },
                  {
                    selector: 'a', options: { ignoreHref: true }
                  }]
              }),
            frontMatter: blog.frontMatter,
          };
          list.push(newPost);
        }
      }
      list.sort(sortBlogList);

      const newTable: BlogTable = {
        tableName: folder,
        blogList: list,
      };
      tables.push(newTable);
    }

    await fs.writeFile(BLOG_TABLE_PATH, JSON.stringify(tables));
    console.log('Table created successfully');
  } catch (error) {
    console.error('Table creation failed: ' + error);
  }
};

export const createData = async (): Promise<void> => {
  try {
    await createContent();
    await createTable();
  } catch (error) {
    console.error('Data creation failed: ' + error);
  }
};

createData();
