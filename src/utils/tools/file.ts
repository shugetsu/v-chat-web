type FileSizeUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB'

/**
 * @description 是否为 图片文件
 * @param {string} fileName
 * @return {boolean}
 */
export function isImageFile(fileName: string): boolean {
  return /\.(jpg|jpeg|png|GIF|JPG|PNG)$/.test(fileName)
}

/**
 * @description 文件大小单位转换
 * @param {number} fileSize
 * @param {FileSizeUnit} fileSizeUnit
 * @return {number}
 */
export function fileSizeUnitTransform(fileSize: number, fileSizeUnit: FileSizeUnit): number {
  const pow = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'].findIndex((item) => item === fileSizeUnit)
  return fileSize / Math.pow(1024, pow)
}

/**
 * @description 文件大小 小于
 * @param {number} fileSize
 * @param {number} lt
 * @param {FileSizeUnit} fileSizeUnit
 * @return {boolean}
 */
export function fileSizeLt(fileSize: number, lt: number, fileSizeUnit: FileSizeUnit = 'B'): boolean {
  const size = fileSizeUnitTransform(fileSize, fileSizeUnit)
  return size < lt
}

/**
 * @description 文件大小 小于等于
 * @param {number} fileSize
 * @param {number} lte
 * @param {FileSizeUnit} fileSizeUnit
 * @return {boolean}
 */
export function fileSizeLte(fileSize: number, lte: number, fileSizeUnit: FileSizeUnit = 'B'): boolean {
  const size = fileSizeUnitTransform(fileSize, fileSizeUnit)
  return size <= lte
}

/**
 * @description 文件大小 大于
 * @param {number} fileSize
 * @param {number} gt
 * @param {FileSizeUnit} fileSizeUnit
 * @return {boolean}
 */
export function fileSizeGt(fileSize: number, gt: number, fileSizeUnit: FileSizeUnit = 'B'): boolean {
  const size = fileSizeUnitTransform(fileSize, fileSizeUnit)
  return size > gt
}

/**
 * @description 文件大小 大于等于
 * @param {number} fileSize
 * @param {number} gte
 * @param {FileSizeUnit} fileSizeUnit
 * @return {boolean}
 */
export function fileSizeGte(fileSize: number, gte: number, fileSizeUnit: FileSizeUnit = 'B'): boolean {
  const size = fileSizeUnitTransform(fileSize, fileSizeUnit)
  return size >= gte
}

/**
 * @description 文件大小 相等
 * @param {number} fileSize
 * @param {number} eq
 * @param {FileSizeUnit} fileSizeUnit
 * @return {boolean}
 */
export function fileSizeEq(fileSize: number, eq: number, fileSizeUnit: FileSizeUnit = 'B'): boolean {
  const size = fileSizeUnitTransform(fileSize, fileSizeUnit)
  return size === eq
}

/**
 * @description 文件大小 不相等
 * @param {number} fileSize
 * @param {number} ne
 * @param {FileSizeUnit} fileSizeUnit
 * @return {boolean}
 */
export function fileSizeNe(fileSize: number, ne: number, fileSizeUnit: FileSizeUnit = 'B'): boolean {
  const size = fileSizeUnitTransform(fileSize, fileSizeUnit)
  return size !== ne
}
