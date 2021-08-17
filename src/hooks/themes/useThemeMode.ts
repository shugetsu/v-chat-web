import { computed, ComputedRef, unref } from 'vue'
import { useThemeStoreWithOut } from '/@/store/modules/theme'
import { createLogger } from '/@/utils/logger'
import { setWindiThemeMode } from '/@/utils/helpers/setWindiThemeMode'
import { ThemeModeEnum } from '/@/datas/enums/ThemeModeEnum'

interface ReturnUseThemeMode {
  /**
   * @description 设置主题模式
   * @param {ThemeModeEnum} mode
   * @return {void}
   */
  setThemeMode: (mode: ThemeModeEnum) => void
  /**
   * @description 切换主题模式
   * @return {void}
   */
  handoverThemeMode: () => void
  /**
   * 主题模式
   */
  themeMode: ComputedRef<ThemeModeEnum>
  /**
   * 是深色模式
   */
  isDark: ComputedRef<boolean>
  /**
   * 是浅色模式
   */
  isLight: ComputedRef<boolean>
}

const logger = createLogger('useThemeMode')

/**
 * @description 主题模式
 * @return {ReturnUseThemeMode}
 */
export function useThemeMode(): ReturnUseThemeMode {
  const themeStore = useThemeStoreWithOut()

  // 主题模式
  const themeMode = computed(() => {
    const mode = themeStore.themeModeGetter
    setWindiThemeMode(mode)
    return mode
  })

  // 是否为深色
  const isDark = computed(() => unref(themeMode) === ThemeModeEnum.DARK)

  // 是否为浅色
  const isLight = computed(() => unref(themeMode) === ThemeModeEnum.LIGHT)

  /**
   * @description 设置主题模式
   * @param {ThemeModeEnum} mode
   * @return {void}
   */
  function setThemeMode(mode: ThemeModeEnum): void {
    // 保存到 theme store
    themeStore.setThemeMode(mode)
    logger.debug(`当前主题模式 '${mode}'`)
  }

  /**
   * @description 切换主题模式
   * @return {void}
   */
  function handoverThemeMode(): void {
    if (unref(isLight)) {
      setThemeMode(ThemeModeEnum.DARK)
    } else if (unref(isDark)) {
      setThemeMode(ThemeModeEnum.LIGHT)
    }
  }

  return {
    setThemeMode,
    handoverThemeMode,
    themeMode,
    isDark,
    isLight
  }
}
