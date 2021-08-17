import { computed, ComputedRef } from 'vue'
import { useThemeStoreWithOut } from '/@/store/modules/theme'
import { createLogger } from '/@/utils/logger'
import { ThemeColorEnum } from '/@/datas/enums/ThemeColorEnum'

interface ReturnUseThemeColor {
  /**
   * @description 设置主题色
   * @param {ThemeColorEnum} themeColor
   * @return {void}
   */
  setThemeColor: (themeColor: ThemeColorEnum) => void
  /**
   * 主题色
   */
  themeColor: ComputedRef<ThemeColorEnum>
}

const logger = createLogger('useThemeColor')

/**
 * @description 主题色
 * @return {ReturnUseThemeColor}
 */
export function useThemeColor(): ReturnUseThemeColor {
  const themeStore = useThemeStoreWithOut()

  // 主题色
  const themeColor = computed(() => themeStore.themeColorGetter)

  /**
   * @description 设置主题色
   * @param {ThemeColorEnum} themeColor
   * @return {void}
   */
  function setThemeColor(themeColor: ThemeColorEnum): void {
    // 保存到 theme store
    themeStore.setThemeColor(themeColor)
    logger.debug(`当前主题色 '${themeColor}'`)
  }

  return {
    setThemeColor,
    themeColor
  }
}
