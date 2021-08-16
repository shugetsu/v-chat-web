/**
 * @date 2021-07-28 14:26:47
 * @lastEditTime 2021-08-16 11:39:33
 * @description 生成 svg 雪碧图
 * @filePath /build/vite/plugins/svgIcons.ts
 * @see https://github.com/anncwb/vite-plugin-svg-icons
 */

import svgIconsPlugin from 'vite-plugin-svg-icons'
import { pathResolve } from '/%/utils'

export function svgIconsPluginConfig(isBuild: boolean) {
  return svgIconsPlugin({
    iconDirs: [pathResolve('src/assets/common/icons')],
    svgoOptions: isBuild,
    symbolId: 'icon-[dir]-[name]'
  })
}
