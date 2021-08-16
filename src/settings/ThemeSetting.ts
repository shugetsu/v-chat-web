/**
 * @date 2021-08-16 10:45:13
 * @lastEditTime 2021-08-16 10:46:12
 * @description 主题设置
 * @filePath /src/settings/ThemeSetting.ts
 */

import { ThemeModeEnum } from '/@/datas/enums/ThemeModeEnum'

export interface ThemeSettingOptions {
  /**
   * 默认主题模式
   */
  defaultThemeMode: ThemeModeEnum
}

export const ThemeSetting: ThemeSettingOptions = {
  defaultThemeMode: ThemeModeEnum.LIGHT
}
