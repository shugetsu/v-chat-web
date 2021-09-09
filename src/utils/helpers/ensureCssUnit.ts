import { isNumber } from 'lodash'

/**
 * @description 确保是 css 单位
 * @param {string | number} value
 * @param {string} unit
 * @return {string}
 */
export function ensureCssUnit(value: string | number, unit = 'px'): string {
  const cssUnit = isNumber(value) ? `${value}${unit}` : value
  return cssUnit
}
