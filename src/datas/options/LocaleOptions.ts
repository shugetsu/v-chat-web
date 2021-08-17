/**
 * @date 2021-08-14 10:15:55
 * @lastEditTime 2021-08-17 11:41:29
 * @description 区域
 * @filePath /src/datas/options/LocaleOptions.ts
 */

import { LocaleEnum } from '../enums/LocaleEnum'

type LocaleOption = {
  label: string
  value: LocaleEnum
}

export const LocaleOptions: Record<LocaleEnum, LocaleOption> = {
  [LocaleEnum.ZH_CN]: {
    label: '简体中文',
    value: LocaleEnum.ZH_CN
  },
  [LocaleEnum.EN_US]: {
    label: 'English',
    value: LocaleEnum.EN_US
  }
}
