import axios from "axios"

//使用async和await使用这个函数
export const getStringResource = async (filePath: string): Promise<string> => {
  try {
    const response = await axios.get(import.meta.env.BASE_URL.slice(0, -1) + filePath);
    return response.data as string;
  } catch (error) {
    console.error('Failed to get string resourse:' + import.meta.env.BASE_URL.slice(0, -1) + filePath, error);
    return 'ERROR:Get resource failed';
  }
}
