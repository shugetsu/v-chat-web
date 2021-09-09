/**
 * @date 2021-08-16 14:41:29
 * @lastEditTime 2021-08-17 11:41:53
 * @description 主题模式
 * @filePath /src/datas/options/ThemeModeOptions.ts
 */

import { ThemeModeEnum } from '../enums/ThemeModeEnum'

type ThemeModeOption = {
  label: string
  value: ThemeModeEnum
}

export const ThemeModeOptions: Record<ThemeModeEnum, ThemeModeOption> = {
  [ThemeModeEnum.DARK]: {
    label: '深色',
    value: ThemeModeEnum.DARK
  },
  [ThemeModeEnum.LIGHT]: {
    label: '浅色',
    value: ThemeModeEnum.LIGHT
  }
}
