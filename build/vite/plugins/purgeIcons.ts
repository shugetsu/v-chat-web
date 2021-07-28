/**
 * @date 2021-07-28 14:26:47
 * @lastEditTime 2021-07-28 14:32:38
 * @description 提取字体图标
 * @filePath /build/vite/plugins/purgeIcons.ts
 * @see https://github.com/antfu/purge-icons
 */

import purgeIconsPlugin from 'vite-plugin-purge-icons'

export function purgeIconsPluginConfig() {
  return purgeIconsPlugin()
}
