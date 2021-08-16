/**
 * @date 2021-08-14 10:15:55
 * @lastEditTime 2021-08-16 10:38:49
 * @description 区域类型
 * @filePath /src/datas/options/LocaleOptions.ts
 */

import { LocaleEnum } from '../enums/LocaleEnum'

export type LocaleOption = {
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
