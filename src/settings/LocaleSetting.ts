/**
 * @date 2021-08-13 15:00:40
 * @lastEditTime 2021-09-29 09:45:57
 * @description 区域设置
 * @filePath /src/settings/LocaleSetting.ts
 */

import { NLocale, NDateLocale } from 'naive-ui/lib/locales'
import { LocaleEnum } from '../datas/enums/LocaleEnum'
import { zhCN as zhCNDateFns, enUS as enUSDateFns } from 'date-fns/locale'
import { Locale as DateFnsLocale } from 'date-fns'
import {
  zhCN as zhCNNaiveUI,
  dateZhCN as dateZhCNNaiveUI,
  enUS as enUSNaiveUI,
  dateEnUS as dateEnUSNaiveUI
} from 'naive-ui'

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
  /**
   * date-fns 可用区域列表
   */
  dateFnsAvailableLocales: Partial<Record<LocaleEnum, DateFnsLocale>>
}>

export const LocaleSetting: LocaleSettingOptions = {
  defaultLocale: LocaleEnum.ZH_CN,
  fallbackLocale: LocaleEnum.ZH_CN,
  availableLocales: [LocaleEnum.EN_US, LocaleEnum.ZH_CN],
  naiveUIAvailableLocales: {
    [LocaleEnum.ZH_CN]: {
      locale: zhCNNaiveUI,
      dateLocale: dateZhCNNaiveUI
    },
    [LocaleEnum.EN_US]: {
      locale: enUSNaiveUI,
      dateLocale: dateEnUSNaiveUI
    }
  },
  dateFnsAvailableLocales: {
    [LocaleEnum.ZH_CN]: zhCNDateFns,
    [LocaleEnum.EN_US]: enUSDateFns
  }
}
