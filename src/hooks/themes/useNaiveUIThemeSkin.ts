import { computed, ComputedRef, unref } from 'vue'
import { ThemeSkins } from '/@/themes/skins'
import { useThemeSkin } from './useThemeSkin'
import { ThemeSkin } from '/@/themes'

interface ReturnUseNaiveUIThemeSkin {
  /**
   * Naive UI 主题皮肤
   */
  naiveUIThemeSkin: ComputedRef<ThemeSkin>
}

/**
 * @description Naive UI 主题皮肤
 * @return {ReturnUseNaiveUIThemeSkin}
 */
export function useNaiveUIThemeSkin(): ReturnUseNaiveUIThemeSkin {
  const { themeSkin } = useThemeSkin()

  // Naive UI 主题皮肤
  const naiveUIThemeSkin = computed(() => {
    const skin = ThemeSkins[unref(themeSkin)]
    return skin
  })

  return {
    naiveUIThemeSkin
  }
}
