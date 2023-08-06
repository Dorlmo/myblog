import { baseURL } from '../../vite.config.js';

/**
 * @description 处理.md字符串，使其中的图片和链接的路径适配于浏览器
 * @param {string} markdownText - 要处理的markdown文本
 * @returns {string} - 处理后的markdown文本
 */
export const processMarkdownPaths = (markdownText:string):string => {
  markdownText = markdownText.replace(/\\/g, "/");

  const linkRegex = /\[(.*?)\]\((.*)\)/g;
  markdownText = markdownText.replace(linkRegex, (_match, altText, linkPath) => {
    const processedLinkPath = linkPath.replace(/.*?(?=content\/)/, baseURL);
    return `[${altText}](${processedLinkPath})`;
  });

  return markdownText;
};
