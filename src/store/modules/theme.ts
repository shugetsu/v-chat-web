/**
 * @date 2021-08-16 10:43:11
 * @lastEditTime 2021-08-16 10:48:09
 * @description 主题 store
 * @filePath /src/store/modules/theme.ts
 */

import { defineStore } from 'pinia'
import { store } from '..'
import { ThemeModeEnum } from '/@/datas/enums/ThemeModeEnum'
import { ThemeSetting } from '/@/settings/ThemeSetting'
import { createLocalCache } from '/@/utils/cache'

export interface ThemeState {
  /**
   * 主题模式
   */
  themeMode: ThemeModeEnum
}

const ID = 'theme'
const lCache = createLocalCache()

export const useThemeStore = defineStore(ID, {
  state: (): ThemeState => ({
    themeMode: lCache.get<ThemeModeEnum>(ID, ThemeSetting.defaultThemeMode)
  }),
  getters: {
    themeModeGetter(): ThemeModeEnum {
      return this.themeMode
    }
  },
  actions: {
    setThemeMode(themeMode: ThemeModeEnum): void {
      this.themeMode = themeMode
      lCache.set(ID, themeMode)
    }
  }
})

/**
 * @description 在 setup 函数外调用则需使用该函数
 */
export function useThemeStoreWithOut() {
  return useThemeStore(store)
}
