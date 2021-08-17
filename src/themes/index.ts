import { GlobalThemeOverrides } from 'naive-ui'

export type ThemeOverride = GlobalThemeOverrides & {
  common: {
    primaryColor: string
    primaryColorHover: string
    primaryColorPressed: string
    primaryColorSuppl: string
  }
}

export type ThemeSkin = DeepPartial<{}>

/**
 * @description 创建主题重载
 * @param {ThemeOverride} themeOverride
 * @return {ThemeOverride}
 */
export function createThemeOverride(themeOverride: ThemeOverride): ThemeOverride {
  const override = { ...themeOverride }
  return override
}

/**
 * @description 创建主题皮肤
 * @param {ThemeSkin} skin
 * @return {ThemeSkin}
 */
export function createThemeSkin(skin: ThemeSkin): ThemeSkin {
  return skin
}
