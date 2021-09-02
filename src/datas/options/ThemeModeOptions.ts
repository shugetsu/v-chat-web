/**
 * @date 2021-08-16 14:41:29
 * @lastEditTime 2021-09-02 15:57:36
 * @description 主题模式
 * @filePath /src/datas/options/ThemeModeOptions.ts
 */

import { ThemeModeEnum } from '../enums/ThemeModeEnum'
import { tKey } from '/@/utils/helpers/tKey'

interface ThemeModeOption {
  label: string
  value: ThemeModeEnum
  svgIconName: string
}

export const ThemeModeOptions: Record<ThemeModeEnum, ThemeModeOption> = {
  [ThemeModeEnum.DARK]: {
    label: tKey('Datas.Options.ThemeModeOptions.Dark'),
    value: ThemeModeEnum.DARK,
    svgIconName: 'moon'
  },
  [ThemeModeEnum.LIGHT]: {
    label: tKey('Datas.Options.ThemeModeOptions.Light'),
    value: ThemeModeEnum.LIGHT,
    svgIconName: 'sun'
  }
}
