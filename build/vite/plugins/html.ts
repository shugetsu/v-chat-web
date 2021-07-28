/**
 * @date 2021-07-28 12:01:03
 * @lastEditTime 2021-07-28 14:44:41
 * @description html 压缩 和 ejs 模板插件
 * @filePath /build/vite/plugins/html.ts
 * @see https://github.com/anncwb/vite-plugin-html
 */

import type { EnvConfigService } from '/$/utils'

import htmlPlugin from 'vite-plugin-html'

export function htmlPluginConfig(isBuild: boolean, viteEnv: EnvConfigService<ViteEnv>) {
  return htmlPlugin({
    minify: isBuild,
    inject: {
      injectData: {
        title: viteEnv.get('VITE_APP_NAME')
      }
    }
  })
}
