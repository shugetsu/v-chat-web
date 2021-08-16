/**
 * @description 获取 命名空间_版本号_
 * @param {string} namespace
 * @param {string} version
 * @return {string}
 */
export function getNV(namespace: string, version: string): string {
  return `${namespace}_${version}_`.toUpperCase()
}
