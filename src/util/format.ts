import { baseURL } from '../../vite.config.ts';

/**
 * @description 处理.md字符串，使其中的图片和链接的路径适配于浏览器
 */
export const processMarkdownPaths = (markdownText: string) => {
    //例:输入 [a](D:\Workspace\content\test\1.md)，并且baseURL=/myblog/，输出 [a](/myblog/content/test/1.md)
    markdownText = markdownText.replace(/\\/g, "/");
    const linkRegex = /\[(.*?)\]\((.*)\)/g;
    markdownText = markdownText.replace(linkRegex, (_match, altText, linkPath) => {
        const processedLinkPath = linkPath.replace(/.*(?=content\/)/,baseURL);
        return `[${altText}](${processedLinkPath})`;
    });

    return markdownText;
}
