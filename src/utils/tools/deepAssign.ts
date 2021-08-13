import { isArray, isNullOrUnDef, isObject } from './is'
import { arrayCopy } from './arrayCopy'

/**
 * @description 深度合并
 * @param {object}  target
 * @param {object[]} sources
 * @return {object}
 */
export function deepAssign<
  T extends {},
  U extends {},
  V extends {},
  W extends {},
  X extends {},
  Y extends {},
  Z extends {}
>(target: T, source1: U, source2: V, source3: W, source4: X, source5: Y, source6: Z): T & U & V & W & X & Y & Z
export function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}, Y extends {}>(
  target: T,
  source1: U,
  source2: V,
  source3: W,
  source4: X,
  source5: Y
): T & U & V & W & X & Y
export function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}, X extends {}>(
  target: T,
  source1: U,
  source2: V,
  source3: W,
  source4: X
): T & U & V & W & X
export function deepAssign<T extends {}, U extends {}, V extends {}, W extends {}>(
  target: T,
  source1: U,
  source2: V,
  source3: W
): T & U & V & W
export function deepAssign<T extends {}, U extends {}, V extends {}>(target: T, source1: U, source2: V): T & U & V
export function deepAssign<T extends {}, U extends {}>(target: T, source: U): T & U
export function deepAssign(target: any, ...sources: any[]): any {
  for (const name in sources) {
    const source = sources[name]
    if (isNullOrUnDef(source)) {
      continue
    }

    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        let value = source[key]
        if (isArray(value)) {
          value = arrayCopy(value)
        } else if (isObject(value)) {
          value = deepAssign({}, value)
        }
        target[key] = value
      }
    }
  }

  return target
}
