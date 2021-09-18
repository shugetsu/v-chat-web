/**
 * @date 2021-07-28 14:12:20
 * @lastEditTime 2021-09-18 09:52:39
 * @description 压缩图片
 * @filePath /build/vite/plugins/imagemin.ts
 * @see https://github.com/anncwb/vite-plugin-imagemin
 */

import imageminPlugin from 'vite-plugin-imagemin'

export function imageminPluginConfig(isBuild: boolean) {
  if (isBuild) {
    return imageminPlugin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 8
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  }
}
