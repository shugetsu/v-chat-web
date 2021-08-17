/**
 * @date 2021-08-17 11:35:13
 * @lastEditTime 2021-08-17 11:41:57
 * @description 主题皮肤
 * @filePath /src/datas/options/ThemeSkinOptions.ts
 */

import { ThemeSkinEnum } from '../enums/ThemeSkinEnum'

type ThemeSkinOption = {
  label: string
  value: ThemeSkinEnum
}

export const ThemeSkinOptions: ThemeSkinOption[] = [
  {
    label: '默认',
    value: ThemeSkinEnum.DEFAULT
  },
  {
    label: '史莱姆',
    value: ThemeSkinEnum.SLIME
  }
]
