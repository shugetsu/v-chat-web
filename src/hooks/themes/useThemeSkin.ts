import { computed, ComputedRef } from 'vue'
import { useThemeStoreWithOut } from '/@/store/modules/theme'
import { createLogger } from '/@/utils/logger'
import { ThemeSkinEnum } from '/@/datas/enums/ThemeSkinEnum'

interface ReturnUseThemeSkin {
  /**
   * @description 设置主题皮肤
   * @param {ThemeSkinEnum} themeSkin
   * @return {void}
   */
  setThemeSkin: (themeSkin: ThemeSkinEnum) => void
  /**
   * 主题皮肤
   */
  themeSkin: ComputedRef<ThemeSkinEnum>
}

const logger = createLogger('useThemeSkin')

/**
 * @description 主题皮肤
 * @return {ReturnUseThemeSkin}
 */
export function useThemeSkin(): ReturnUseThemeSkin {
  const themeStore = useThemeStoreWithOut()

  // 主题皮肤
  const themeSkin = computed(() => themeStore.themeSkinGetter)

  /**
   * @description 设置主题皮肤
   * @param {ThemeSkinEnum} themeSkin
   * @return {void}
   */
  function setThemeSkin(themeSkin: ThemeSkinEnum): void {
    // 保存到 theme store
    themeStore.setThemeSkin(themeSkin)
    logger.debug(`当前主题皮肤 '${themeSkin}'`)
  }

  return {
    setThemeSkin,
    themeSkin
  }
}
