/**
 * @description 先根据中文排序，再进行英文排序
 * @param {string} a - 要比较的第一个字符串
 * @param {string} b - 要比较的第二个字符串
 * @returns {number} - 比较结果的数字
 */
export const sortByName = (a, b) => {
    const chineseRegex = /[\u4E00-\u9FFF]/;
  
    if (chineseRegex.test(a) && chineseRegex.test(b)) {
      return a.localeCompare(b, 'zh');
    }
  
    return a.localeCompare(b);
  };
  