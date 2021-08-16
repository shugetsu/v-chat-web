/**
 * @date 2021-08-14 09:37:40
 * @lastEditTime 2021-08-16 10:26:25
 * @description 本地缓存
 * @filePath /src/utils/cache/local/LocalCache.ts
 */

import { getNV } from './getNV'
import { getNVK } from './getNVK'
import { isExpire } from './isExpire'

export interface LocalCacheOptions {
  /**
   * 命名空间
   */
  namespace: string
  /**
   * 版本号
   */
  version: string
}

export interface RawData<T = any> {
  /**
   * 命名空间
   */
  n: string
  /**
   * 版本号
   */
  v: string
  /**
   * 缓存写入的时间
   */
  t: number
  /**
   * 缓存有效期
   */
  ttl: number
  /**
   * 缓存键
   */
  key: string
  /**
   * 缓存值
   */
  value: T
}

export interface CacheOptions {
  /**
   * 缓存有效期，0为永不过期（单位/毫秒）
   * @default 0
   */
  ttl?: number
}

export class LocalCache {
  private readonly storage = localStorage

  constructor(private readonly options: LocalCacheOptions) {}

  /**
   * @description 设置原始数据
   * @param {RawData<T>} rawData
   * @return {void}
   */
  private setRaw<T>(rawData: RawData<T>): void {
    const nvk = getNVK(this.options.namespace, this.options.version, rawData.key)
    this.storage.setItem(nvk, JSON.stringify(rawData))
  }

  /**
   * @description 获取原始数据
   * @param {string} key
   * @returns {RawData<T> | null}
   */
  private getRaw<T>(key: string): RawData<T> | null {
    const nvk = getNVK(this.options.namespace, this.options.version, key)
    const cacheRawData = this.storage.getItem(nvk)

    if (!cacheRawData) {
      return null
    }

    try {
      const rawData = JSON.parse(cacheRawData) as RawData<T>

      if (isExpire(rawData.t, rawData.ttl)) {
        this.remove(key)
        return null
      }

      return rawData
    } catch {
      this.remove(key)
      return null
    }
  }

  /**
   * @description 获取所有原始数据
   * @returns {Record<string, RawData>}
   */
  private getRawAll(): Record<string, RawData> {
    const rawDataAll = {}
    const nvReg = new RegExp(`^${getNV(this.options.namespace, this.options.version)}`)

    for (const nvk in this.storage) {
      if (nvReg.test(nvk)) {
        const rawData = this.getRaw(nvk)
        if (rawData) {
          rawDataAll[rawData.key] = rawData
        }
      }
    }

    return rawDataAll
  }

  /**
   * @description 设置缓存
   * @param {string} key
   * @param {T} value
   * @param {CacheOptions} opts
   * @return {void}
   */
  set<T>(key: string, value: T, opts?: CacheOptions): void {
    const rawData: RawData<T> = {
      n: this.options.namespace,
      v: this.options.version,
      t: Date.now(),
      ttl: opts?.ttl ?? 0,
      key,
      value
    }
    this.setRaw(rawData)
  }

  /**
   * @description 获取缓存
   * @param {string} key
   * @param {T} defValue
   * @return {T | null}
   */
  get<T>(key: string): T | null
  get<T>(key: string, defValue: T): T
  get<T>(key: string, defValue: T | null = null): T | null {
    const rawData = this.getRaw<T>(key)
    if (!rawData) {
      return defValue
    }
    return rawData.value
  }

  /**
   * @description 获取所有缓存
   * @return {Record<string, any>}
   */
  getAll(): Record<string, any> {
    const rawDataAll = this.getRawAll()
    const dataAll = Object.values(rawDataAll).reduce((dataAll, rawData) => (dataAll[rawData.key] = rawData.value), {})
    return dataAll
  }

  /**
   * @description 是否有某个缓存
   * @param {string} key
   * @returns {boolean}
   */
  has(key: string): boolean {
    const rawData = this.getRaw(key)
    return !!rawData
  }

  /**
   * @description 删除缓存
   * @param {string} key
   * @return {void}
   */
  remove(key: string): void {
    const nvk = getNVK(this.options.namespace, this.options.version, key)
    this.storage.removeItem(nvk)
  }

  /**
   * @description 清空缓存
   * @return {void}
   */
  clear(): void {
    const rawDataAll = this.getRawAll()
    for (const key in rawDataAll) {
      this.remove(key)
    }
  }
}
