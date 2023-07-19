import axios from "axios";
import data from '../assets/data/blogTable.json';
import { getRoutePath } from '../lib/getRoute';

//使用async和await使用这个函数
export const getStringResource = async (filePath:string) => {
  try {
    const response = await axios.get(filePath);
    return response.data;
  } catch (error) {
    console.error('Failed to get string resourse:' + filePath, error);
    return 'ERROR:Get resource failed';
  }
}

export const getBlogTable = ()=>{
  return data;
}

export const getFirstDocPath = ()=>{
  return data[0].blogList[0].path;
}

export const getBlogContent = async (table:string,blog:string)=>{
  const blogName = blog.replace(/\.html/,'');
  const newBlog = {
    content:await getStringResource(getRoutePath('content', table, blog)),
    frontMatter:data.find(e=>e.tableName==table)?.blogList.find(e=>e.name==blogName)?.frontMatter,
  }
  console.log(newBlog);
  return newBlog;
}