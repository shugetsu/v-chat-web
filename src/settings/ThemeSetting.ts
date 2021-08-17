/**
 * @date 2021-08-16 10:45:13
 * @lastEditTime 2021-08-17 10:40:37
 * @description 主题设置
 * @filePath /src/settings/ThemeSetting.ts
 */

import { ThemeSkinEnum } from '/@/datas/enums/ThemeSkinEnum'
import { ThemeColorEnum } from '/@/datas/enums/ThemeColorEnum'
import { ThemeModeEnum } from '/@/datas/enums/ThemeModeEnum'

export interface ThemeSettingOptions {
  /**
   * 默认主题模式
   */
  defaultThemeMode: ThemeModeEnum
  /**
   * 默认主题色
   */
  defaultThemeColor: ThemeColorEnum
  /**
   * 主题皮肤
   */
  defaultthemeSkin: ThemeSkinEnum
}

export const ThemeSetting: ThemeSettingOptions = {
  defaultThemeMode: ThemeModeEnum.LIGHT,
  defaultThemeColor: ThemeColorEnum.YANG_HONG,
  defaultthemeSkin: ThemeSkinEnum.DEFAULT
}
