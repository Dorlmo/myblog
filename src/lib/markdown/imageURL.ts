import MarkdownIt from 'markdown-it';
import { join, dirname, resolve, relative, isAbsolute } from 'path';
import { fileURLToPath } from 'url';
import { isURL } from '../../util/pathTest.ts';
import { baseURL } from '../../../vite.config.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_FOLDER_PATH = resolve(__dirname, '../../../content');

export const imageURL = (md: MarkdownIt) => {
  md.renderer.rules.image = function (tokens, idx, _options, env, _self) {
    const token = tokens[idx];
    const src: string | null = token.attrGet('src');
    const alt: string = token.content;

    if (!src || !env.path) {
      return '';
    }

    //如果是链接，则直接返回，如果是相对路径，则转化为绝对路径
    let newPath: string = decodeURIComponent(src);
    if (!isAbsolute(newPath)) {
      if (isURL(newPath)) {
        return `<img class="lazyload" data-src="${newPath}" alt="${alt}" />`;
      } else {
        newPath = join(dirname(env.path), newPath);
      }
    }

    //将绝对路径进行下一步处理变成目标字符串
    newPath = relative(BLOG_FOLDER_PATH, newPath);
    if (!newPath.startsWith('..') && !isAbsolute(newPath)) {
      newPath = join(baseURL, 'content', newPath).replace(/\\/g, "/");
      return `<img class="lazyload" data-src="${newPath}" alt="${alt}" />`;
    } else {
      console.log(`File: ${src} from ${env.path} is not in the content folder`);
      return '';
    }
  };
};


/*
export const imageURL = (md: MarkdownIt) => {
  md.renderer.rules.image = function (tokens, idx, _options, env, _self) {

    const token = tokens[idx];

    let src: string | null = token.attrGet('src');
    const alt: string = token.content;

    if (src && env.path) {
      src = decodeURIComponent(src);
      if (!isAbsolute(src)) {
        if (isURL(src))
          return `<img class="lazyload" data-src="${src}" alt="${alt}" />`;
        else src = join(dirname(env.path), src);
      }

      if (fileReachable(src)) {
        const newName = nanoid();
        generateNewImage(src, newName);
        return `<img class="lazyload" data-src="${join(baseURL, 'assets', newName + '.webp')}" alt="${newName}" />`;
      }
      else {
        console.log(`file:${src} not reachable`);
        return '';
      }

    }
    return '';
  };
} 
*/