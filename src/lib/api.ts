import axios from "axios";
import { BlogIndex } from '../assets/data/blogIndex.js';
import { getRoutePath } from '../lib/getRoute';
import { Blog, BlogTable } from "../interfaces/blogDataTypes";

export const getStringResource = async (filePath: string): Promise<string> => {
  try {
    const response = await axios.get(filePath);
    return response.data;
  } catch (error) {
    console.error('Failed to get string resourse:' + filePath, error);
    throw new Error('ERROR: Get resource failed');
  }
}

export const getJSONResource = async (filePath: string): Promise<Object> => {
  try {
    const response = await axios.get(filePath);
    return response.data;
  } catch (error) {
    console.error('Failed to get json resourse:' + filePath, error);
    throw new Error('ERROR: Get resource failed');
  }
}

export const getBlogTable = (): BlogTable[] => {
  return BlogIndex;
}

export const getFirstDocPath = (): string => {
  return BlogIndex[0].blogList[0].path;
}

export const getBlogContent = async (table: string, blog: string): Promise<Blog> => {
  const contentPath = `/content/${table}/${blog}.html`;
  const recordPath = `/record/${table}/${blog}.json`;
  const newBlog = {
    content: await getStringResource(getRoutePath(contentPath)),
    frontMatter: await getJSONResource(getRoutePath(recordPath)),
  }
  return newBlog;
}
