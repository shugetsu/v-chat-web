/**
 * @date 2021-07-28 09:41:10
 * @lastEditTime 2021-08-14 14:45:39
 * @description 环境变量服务
 * @filePath /build/utils/EnvConfigService.ts
 */

export class EnvConfigService<T extends ViteEnv | AppEnv> {
  constructor(private readonly env: T) {
    this.env['VITE_PORT'] = Number(this.env['VITE_PORT'])
  }

  /**
   * @description 获取环境变量
   * @param {K} key
   * @return {T[K]}
   */
  get<K extends keyof T>(key: K): T[K] {
    const value = this.env[key]
    if (value === undefined) {
      throw new Error(`找不到该 '${key}' 环境变量`)
    }
    return value
  }
}
