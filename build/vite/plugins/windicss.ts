/**
 * @date 2021-07-28 14:27:41
 * @lastEditTime 2021-07-28 14:34:25
 * @description windicss
 * @filePath /build/vite/plugins/windicss.ts
 * @see https://windicss.org/integrations/vite.html
 */

import windicssPlugin from 'vite-plugin-windicss'

export function windicssPluginConfig() {
  return windicssPlugin({
    safelist: 'no-select',
    preflight: {
      enableAll: true
    }
  })
}
