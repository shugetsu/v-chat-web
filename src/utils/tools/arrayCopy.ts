import { isArray, isObject } from './is'
import { deepAssign } from './deepAssign'

/**
 * @description 数组拷贝
 * @param {Array} array
 * @return {Array<T>}
 */
export function arrayCopy<T>(array: T[]): T[] {
  return array.map((item: T): T => {
    if (isArray(item)) {
      return arrayCopy<T>(item) as any
    }
    return isObject(item) ? deepAssign({}, item) : item
  })
}
