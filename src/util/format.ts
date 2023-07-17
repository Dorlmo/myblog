/**
 * @description 处理.md字符串，使其中的图片和链接的路径适配于浏览器
 */
export const processMarkdownPaths = (markdownText: string) => {
    //例:输入 [a](D:\Workspace\content\test\1.md)，输出 [a](/content/test/1.md)
    markdownText = markdownText.replace(/\\/g, "/");
    const linkRegex = /\[(.*?)\]\((.*)\)/g;
    markdownText = markdownText.replace(linkRegex, (_match, altText, linkPath) => {
        const processedLinkPath = linkPath.replace(/.*(?=\/content\/)/,'');
        return `[${altText}](${processedLinkPath})`;
    });

    return markdownText;
}
