/**
 * @date 2021-08-16 10:43:11
 * @lastEditTime 2021-08-17 10:17:39
 * @description 主题 store
 * @filePath /src/store/modules/theme.ts
 */

import { defineStore } from 'pinia'
import { store } from '..'
import { ThemeColorEnum } from '/@/datas/enums/ThemeColorEnum'
import { ThemeModeEnum } from '/@/datas/enums/ThemeModeEnum'
import { ThemeSkinEnum } from '/@/datas/enums/ThemeSkinEnum'
import { ThemeSetting } from '/@/settings/ThemeSetting'
import { createLocalCache } from '/@/utils/cache'

export interface ThemeState {
  /**
   * 主题模式
   */
  themeMode: ThemeModeEnum
  /**
   * 主题色
   */
  themeColor: ThemeColorEnum
  /**
   * 主题皮肤
   */
  themeSkin: ThemeSkinEnum
}

const ID = 'theme'
const themeModeKey = `${ID}-mode`
const themeColorKey = `${ID}-color`
const themeSkinKey = `${ID}-skin`
const lCache = createLocalCache()

export const useThemeStore = defineStore(ID, {
  state: (): ThemeState => ({
    themeMode: lCache.get<ThemeModeEnum>(themeModeKey, ThemeSetting.defaultThemeMode),
    themeColor: lCache.get<ThemeColorEnum>(themeColorKey, ThemeSetting.defaultThemeColor),
    themeSkin: lCache.get<ThemeSkinEnum>(themeSkinKey, ThemeSetting.defaultthemeSkin)
  }),
  getters: {
    themeModeGetter(): ThemeModeEnum {
      return this.themeMode
    },
    themeColorGetter(): ThemeColorEnum {
      return this.themeColor
    },
    themeSkinGetter(): ThemeSkinEnum {
      return this.themeSkin
    }
  },
  actions: {
    setThemeMode(themeMode: ThemeModeEnum): void {
      this.themeMode = themeMode
      lCache.set(themeModeKey, themeMode)
    },
    setThemeColor(themeColor: ThemeColorEnum): void {
      this.themeColor = themeColor
      lCache.set(themeColorKey, themeColor)
    },
    setThemeSkin(themeSkin: ThemeSkinEnum): void {
      this.themeSkin = themeSkin
      lCache.set(themeSkinKey, themeSkin)
    }
  }
})

/**
 * @description 在 setup 函数外调用则需使用该函数
 */
export function useThemeStoreWithOut() {
  return useThemeStore(store)
}
