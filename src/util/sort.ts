/**
 * @description 先根据中文排序，再进行英文排序
 */
export const sortByName = (a: string, b: string): number => {
    // 中文排序
    if (/[\u4E00-\u9FFF]/.test(a[0]) && /[\u4E00-\u9FFF]/.test(b[0])) {
        return a.localeCompare(b, 'zh');
    }
    // 英文排序
    return a.localeCompare(b);
}