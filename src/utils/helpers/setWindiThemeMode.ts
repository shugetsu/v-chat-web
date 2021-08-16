import { ThemeModeEnum } from '/@/datas/enums/ThemeModeEnum'

/**
 * @description 设置 windi 主题模式
 * @param {ThemeModeEnum} mode
 * @return {void}
 */
export function setWindiThemeMode(mode: ThemeModeEnum): void {
  const htmlDom = document.querySelector('html')
  if (mode === ThemeModeEnum.DARK) {
    htmlDom?.classList?.add(ThemeModeEnum.DARK)
    htmlDom?.classList?.remove(ThemeModeEnum.LIGHT)
  } else if (mode === ThemeModeEnum.LIGHT) {
    htmlDom?.classList?.add(ThemeModeEnum.LIGHT)
    htmlDom?.classList?.remove(ThemeModeEnum.DARK)
  }
}
