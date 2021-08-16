/**
 * @description 是否已过期
 * @param {number} t
 * @param {number} ttl
 * @return {boolean}
 */
export function isExpire(t: number, ttl: number): boolean {
  return ttl !== 0 && t + ttl < Date.now()
}
