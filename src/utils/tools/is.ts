/**
 * @description 类型判断
 * @param {unknown} val
 * @param {string} type
 * @return {boolean}
 */
export function is(val: unknown, type: string): val is boolean {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}

/**
 * @description 是否为 Null
 * @param {unknown} val
 * @return {boolean}
 */
export function isNull(val: unknown): val is null {
  return is(val, 'Null')
}

/**
 * @description 是否为 Undefined
 * @param {unknown} val
 * @return {boolean}
 */
export function isUnDef<T = unknown>(val: T): val is T {
  return is(val, 'Undefined')
}

/**
 * @description 是否不为 Undefined
 * @param {unknown} val
 * @return {boolean}
 */
export function isDef<T = unknown>(val: T): val is T {
  return !isUnDef(val)
}

/**
 * @description 是否为 Null | Undefined
 * @param {unknown} val
 * @return {boolean}
 */
export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isNull(val) || isUnDef(val)
}

/**
 * @description 是否为 Null & Undefined
 * @param {unknown} val
 * @return {boolean}
 */
export function isNullAndDef(val: unknown): val is null | undefined {
  return isNull(val) && isUnDef(val)
}

/**
 * @description 是否为 Object
 * @param {any} val
 * @return {boolean}
 */
export function isObject(val: any): val is Record<any, any> {
  return is(val, 'Object')
}

/**
 * @description 是否为 Array
 * @param {any} val
 * @return {boolean}
 */
export function isArray(val: any): val is Array<any> {
  return is(val, 'Array')
}

/**
 * @description 是否为 Function
 * @param {unknown} val
 * @return {boolean}
 */
export function isFunction(val: unknown): val is Function {
  return is(val, 'Function')
}

/**
 * @description 是否为 Promise
 * @param {any} val
 * @return {boolean}
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * @description 是否为 String
 * @param {unknown} val
 * @return {boolean}
 */
export function isString(val: unknown): val is string {
  return is(val, 'String')
}

/**
 * @description 是否为 Number
 * @param {unknown} val
 * @return {boolean}
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

/**
 * @description 是否为 Boolean
 * @param {unknown} val
 * @return {boolean}
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

/**
 * @description 是否为 hex color
 * @param {string} val
 * @return {boolean}
 */
export function isHexColor(val: string): boolean {
  return /^#[0-9A-F]{6}$/i.test(val)
}
