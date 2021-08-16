import { getNV } from './getNV'

/**
 * @description 获取 命名空间_版本号_{key}
 * @param {string} namespace
 * @param {string} version
 * @param {string} key
 * @return {string}
 */
export function getNVK(namespace: string, version: string, key: string): string {
  const nv = getNV(namespace, version)
  const nvReg = new RegExp(`${nv}`, 'i')
  const k = key.replace(nvReg, '').toUpperCase()
  const nvk = `${nv}${k}`
  return nvk
}
