import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import { createViteEnvConfigService, pathResolve } from '../utils'
import { vitePluginsConfig } from './plugins'

export function viteConfig({ command, mode }: ConfigEnv): UserConfig {
  const isBuild = command === 'build'
  const viteEnv = createViteEnvConfigService(loadEnv(mode, pathResolve('')) as unknown as ViteEnv)

  return {
    base: viteEnv.get('VITE_PUBLIC_PATH'),
    assetsInclude: [pathResolve('src/assets')],
    plugins: vitePluginsConfig(isBuild, viteEnv),
    resolve: {
      alias: [
        { find: /\/@\//, replacement: pathResolve('src') + '/' },
        { find: /\/%\//, replacement: pathResolve('build') + '/' },
        { find: /\/#\//, replacement: pathResolve('typings') + '/' }
      ]
    },
    server: {
      host: true,
      port: viteEnv.get('VITE_PORT'),
      proxy: {}
    },
    build: {
      target: 'es2015',
      brotliSize: false,
      terserOptions: {
        compress: {
          keep_infinity: true
        }
      }
    }
  }
}
