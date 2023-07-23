/**
 * @description 先根据中文排序，再进行英文排序
 * @param {string} a - 要比较的第一个字符串
 * @param {string} b - 要比较的第二个字符串
 * @returns {number} - 比较结果的数字
 */
import { BlogTable, Post } from '../interfaces/blogDataTypes'

export const sortByName = (a: string, b: string): number => {
  const chineseRegex = /[\u4E00-\u9FFF]/;

  if (chineseRegex.test(a) && chineseRegex.test(b)) {
    return a.localeCompare(b, 'zh');
  }

  return a.localeCompare(b);
};

export const sortBlogList = (a: Post, b: Post): number => {
  const hasIndexA = a.frontMatter && typeof a.frontMatter.index === 'number';
  const hasIndexB = b.frontMatter && typeof b.frontMatter.index === 'number';

  if (hasIndexA && hasIndexB) {
    // Both have index properties, sort based on index
    return a.frontMatter.index! - b.frontMatter.index!;
  } else if (hasIndexA) {
    // Only A has index property, A comes first
    return -1;
  } else if (hasIndexB) {
    // Only B has index property, B comes first
    return 1;
  } else {
    // Both don't have index properties, sort based on name
    return a.name.localeCompare(b.name);
  }
};
