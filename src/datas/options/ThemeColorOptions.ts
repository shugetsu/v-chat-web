/**
 * @date 2021-08-16 15:26:37
 * @lastEditTime 2021-09-02 15:57:39
 * @description 主题色
 * @filePath /src/datas/options/ThemeColorOptions.ts
 */

import { ThemeColorEnum } from '../enums/ThemeColorEnum'
import { tKey } from '/@/utils/helpers/tKey'
import { WeiLan } from '/@/themes/overrides/WeiLan'
import { YangHong } from '/@/themes/overrides/YangHong'

interface ThemeColorOption {
  label: string
  value: ThemeColorEnum
  linearGradient: Array<{
    offset: number
    stopColor: string
  }>
}

export const ThemeColorOptions: Record<ThemeColorEnum, ThemeColorOption> = {
  [ThemeColorEnum.YANG_HONG]: {
    label: tKey('Datas.Options.ThemeColorOptions.YangHong'),
    value: ThemeColorEnum.YANG_HONG,
    linearGradient: [
      {
        offset: 0,
        stopColor: '#f095ff'
      },
      {
        offset: 0.99,
        stopColor: YangHong.common.primaryColor
      }
    ]
  },
  [ThemeColorEnum.WEI_LAN]: {
    label: tKey('Datas.Options.ThemeColorOptions.WeiLan'),
    value: ThemeColorEnum.WEI_LAN,
    linearGradient: [
      {
        offset: 0,
        stopColor: '#88fcfe'
      },
      {
        offset: 0.99,
        stopColor: WeiLan.common.primaryColor
      }
    ]
  }
}
