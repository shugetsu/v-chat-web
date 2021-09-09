import path from 'path'
import { EnvConfigService } from './EnvConfigService'

/**
 * 根路径
 * @param {string} dir
 * @return {string}
 */
export function pathResolve(dir: string): string {
  return path.resolve(process.cwd(), '.', dir)
}

/**
 * 创建 Vite 环境变量服务
 * @param {ViteEnv} env
 * @return {EnvConfigService<ViteEnv>}
 */
export function createViteEnvConfigService(env: ViteEnv): EnvConfigService<ViteEnv> {
  const viteEnv = new EnvConfigService<ViteEnv>(env)
  return viteEnv
}

/**
 * 创建 App 环境变量服务
 * @return {EnvConfigService<AppEnv>}
 */
export function createAppEnvConfigService(): EnvConfigService<AppEnv> {
  const env = import.meta.env as unknown as AppEnv
  const appEnv = new EnvConfigService<AppEnv>(env)
  return appEnv
}
