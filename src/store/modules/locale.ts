/**
 * @date 2021-08-13 15:58:08
 * @lastEditTime 2021-08-13 21:33:39
 * @description 区域 store
 * @filePath /src/store/modules/locale.ts
 */

import { store } from '../'
import { defineStore } from 'pinia'
import { LocaleSetting } from '/@/settings/LocaleSetting'
import { LocaleEnum } from '../../datas/enums/LocaleEnum'
import { createLocalCache } from '../../utils/cache'

interface LocaleState {
  /**
   * 区域
   */
  locale: LocaleEnum
}

const ID = 'locale'
const lCache = createLocalCache()

export const useLocaleStore = defineStore(ID, {
  state: (): LocaleState => ({
    locale: lCache.get<LocaleEnum>(ID, LocaleSetting.defaultLocale)
  }),
  getters: {
    localeGetter(): LocaleEnum {
      return this.locale
    }
  },
  actions: {
    setLocale(locale: LocaleEnum): void {
      this.locale = locale
      lCache.set(ID, locale)
    }
  }
})

/**
 * @description 在 setup 函数外调用则需使用该函数
 */
export function useLocaleStoreWithOut() {
  return useLocaleStore(store)
}
