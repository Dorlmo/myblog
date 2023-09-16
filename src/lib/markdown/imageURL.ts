import MarkdownIt from 'markdown-it';
import path from 'path';
import { fileURLToPath } from 'url';
import { isURL } from '../../util/pathTest.ts';
import { baseURL } from '../../../vite.config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_FOLDER_PATH = path.resolve(__dirname, '../../../content');

export const imageURL = (md: MarkdownIt) => {
  md.renderer.rules.image = function (tokens, idx, _options, env, _self) {
    const token = tokens[idx];
    const src: string | undefined = token.attrGet('src')?.normalize();
    const alt: string = token.content;

    if (!src || !env.path) {
      return '';
    }

    let newSourcePath = decodeURIComponent(src).replace(/\\/g, "/").replace(/.*?(?=content\/)/, baseURL);
    return `<img class="lazyload" data-src="${newSourcePath}" alt="${alt}" />`
    /*
        //如果是链接，则直接返回，如果是相对路径，则转化为绝对路径
        let newPath: string = decodeURIComponent(src);
        if (!path.isAbsolute(newPath)) {
          if (isURL(newPath)) {
            return `<img class="lazyload" data-src="${newPath}" alt="${alt}" />`;
          } else {
            newPath = path.join(path.dirname(env.path), newPath);
          }
        }
    
        //将绝对路径进行下一步处理变成目标字符串
        newPath = path.relative(BLOG_FOLDER_PATH, newPath);
        if (!newPath.startsWith('..') && !path.isAbsolute(newPath)) {
          newPath = path.join(baseURL, 'content', newPath);
          return `<img class="lazyload" data-src="${newPath}" alt="${alt}" />`;
        } else {
          console.log(`File: ${src} from ${env.path} is not in the content folder`);
          return '';
        }
        */
  };
};