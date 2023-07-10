import axios from "axios"

export const getStringResource = async (filePath: string): Promise<string> => {
  try {
    const response = await axios.get(filePath);
    return response.data as string;
  } catch (error) {
    console.error('Failed to get string resourse:' + filePath, error);
    return 'failed';
  }
}