import axios from "axios"

//使用async和await使用这个函数
export const getStringResource = async (filePath) => {
  try {
    const response = await axios.get(filePath);
    return response.data;
  } catch (error) {
    console.error('Failed to get string resourse:' + filePath, error);
    return 'ERROR:Get resource failed';
  }
}
