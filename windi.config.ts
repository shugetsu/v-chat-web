/**
 * @date 2021-07-28 14:38:13
 * @lastEditTime 2021-09-18 14:17:42
 * @description windicss 配置
 * @filePath /windi.config.ts
 * @see https://windicss.org/guide/configuration.html
 */

import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: {
    prefix: 'v:'
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)'
      }
    }
  }
})
