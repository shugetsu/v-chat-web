declare global {
  /**
   * 删除索引签名
   *
   * @example
   * interface Example {
   *   [key: string]: any
   *   name: string
   * }
   *
   * type RemoveIndexExample = RemoveIndex<Example>
   *
   * type RemoveIndexExample = {
   *   name: string
   * }
   */
  type RemoveIndex<T> = {
    [P in keyof T as string extends P ? never : number extends P ? never : P]: T[P]
  }

  /**
   * 将全部属性变为可选的
   *
   * @example
   * interface Example {
   *   name: string
   *   feature: {
   *     weight: number
   *     height: number
   *   }
   * }
   *
   * type DeepPartialExample = DeepPartial<Example>
   *
   * type DeepPartialExample = {
   *   name?: string
   *   feature?: {
   *     weight?: number
   *     height?: number
   *   }
   * }
   */
  type DeepPartial<T> = T extends Function ? T : T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

  /**
   * 类型重写
   *
   * @example
   * interface Example {
   *   name: string
   *   age: string
   * }
   *
   * type OverwriteExample = Overwrite<Example, {
   *   age: number
   * }>
   *
   * type OverwriteExample = {
   *   name: string
   *   age: number
   * }
   */
  type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

  /**
   * App 环境变量
   */
  type AppEnv = RemoveIndex<ImportMetaEnv> & ViteEnv

  /**
   * Vite 环境变量
   */
  type ViteEnv = {
    /**
     * 端口号
     */
    VITE_PORT: number
    /**
     * 公共路径
     */
    VITE_PUBLIC_PATH: string
    /**
     * App 名称
     */
    VITE_APP_NAME: string
    /**
     * 命名空间
     */
    VITE_NAMESPACE: string
    /**
     * LocalCache 版本号
     */
    VITE_LOCAL_CACHE_VERSION: string
    /**
     * 日志级别
     */
    VITE_LOGGER_LEVEL: 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'SILENT'
  }
}

declare module 'vue' {
  /**
   * 扩展 HTMLAttributes 属性
   */
  interface HTMLAttributes extends WindiAttributes {}

  /**
   * windicss 属性
   */
  export interface WindiAttributes {
    /**
     * 深色模式
     */
    'v:dark'?: string
    /**
     * 浅色模式
     */
    'v:light'?: string
    /**
     * 鼠标移入
     */
    'v:hover'?: string
  }

  /**
   * 扩展 SVGAttributes 属性
   */
  interface SVGAttributes {
    /**
     * xmlns xlink
     */
    xmlnsXlink?: string
  }
}

/**
 * suppress ts:2669
 */
export {}
