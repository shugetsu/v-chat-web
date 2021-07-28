/**
 * @date 2021-07-28 12:09:17
 * @lastEditTime 2021-07-28 14:33:24
 * @description 资源压缩
 * @filePath /build/vite/plugins/compression.ts
 * @see https://github.com/anncwb/vite-plugin-compression
 */

import compressionPlugin from 'vite-plugin-compression'

export function compressionPluginConfig(isBuild: boolean) {
  if (isBuild) {
    return [
      compressionPlugin({
        algorithm: 'gzip',
        deleteOriginFile: false
      }),
      compressionPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile: false
      })
    ]
  }
}
