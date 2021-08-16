/**
 * @date 2021-08-13 15:00:40
 * @lastEditTime 2021-08-14 15:23:23
 * @description 区域设置
 * @filePath /src/settings/LocaleSetting.ts
 */

import { NLocale, NDateLocale } from 'naive-ui/lib/locales'
import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
import { LocaleEnum } from '../datas/enums/LocaleEnum'

export interface NaiveLocale {
  /**
   * Naive UI 区域
   */
  locale: NLocale
  /**
   * Naive UI 日期区域
   */
  dateLocale: NDateLocale
}

type LocaleSettingOptions = Readonly<{
  /**
   * 默认区域
   */
  defaultLocale: LocaleEnum
  /**
   * 回退区域
   */
  fallbackLocale: LocaleEnum
  /**
   * 可用区域列表
   */
  availableLocales: LocaleEnum[]
  /**
   * Naive UI 可用区域列表
   */
  naiveUIAvailableLocales: Partial<Record<LocaleEnum, NaiveLocale>>
}>

export const LocaleSetting: LocaleSettingOptions = {
  defaultLocale: LocaleEnum.ZH_CN,
  fallbackLocale: LocaleEnum.ZH_CN,
  availableLocales: [LocaleEnum.EN_US, LocaleEnum.ZH_CN],
  naiveUIAvailableLocales: {
    [LocaleEnum.ZH_CN]: {
      locale: zhCN,
      dateLocale: dateZhCN
    },
    [LocaleEnum.EN_US]: {
      locale: enUS,
      dateLocale: dateEnUS
    }
  }
}
