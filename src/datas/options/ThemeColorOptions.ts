/**
 * @date 2021-08-16 15:26:37
 * @lastEditTime 2021-08-17 11:41:44
 * @description 主题色
 * @filePath /src/datas/options/ThemeColorOptions.ts
 */

import { ThemeColorEnum } from '../enums/ThemeColorEnum'
import { WeiLan } from '/@/themes/overrides/WeiLan'
import { YangHong } from '/@/themes/overrides/YangHong'

type Gradient = {
  offset: number
  color: string
}

type ThemeColorOption = {
  label: string
  value: ThemeColorEnum
  color: string
  gradients: Gradient[]
}

export const ThemeColorOptions: Record<ThemeColorEnum, ThemeColorOption> = {
  [ThemeColorEnum.YANG_HONG]: {
    label: '洋红',
    value: ThemeColorEnum.WEI_LAN,
    color: YangHong.common.primaryColor,
    gradients: [
      {
        offset: 0,
        color: '#f095ff'
      },
      {
        offset: 0.99,
        color: YangHong.common.primaryColor
      }
    ]
  },
  [ThemeColorEnum.WEI_LAN]: {
    label: '蔚蓝',
    value: ThemeColorEnum.WEI_LAN,
    color: WeiLan.common.primaryColor,
    gradients: [
      {
        offset: 0,
        color: '#88fcfe'
      },
      {
        offset: 0.99,
        color: WeiLan.common.primaryColor
      }
    ]
  }
}
