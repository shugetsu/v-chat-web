import { computed, ComputedRef, unref } from 'vue'
import { useThemeColor } from './useThemeColor'
import { ThemeOverride } from '/@/themes'
import { ThemeOverrides } from '/@/themes/overrides'

interface ReturnUseNaiveUIThemeOverride {
  /**
   * Naive UI 主题重载
   */
  naiveUIThemeOverride: ComputedRef<ThemeOverride>
}

/**
 * @description Naive UI 主题重载
 * @return {ReturnUseNaiveUIThemeOverride}
 */
export function useNaiveUIThemeOverride(): ReturnUseNaiveUIThemeOverride {
  const { themeColor } = useThemeColor()

  // Naive UI 主题重载
  const naiveUIThemeOverride = computed(() => {
    const override = ThemeOverrides[unref(themeColor)]
    return override
  })

  return {
    naiveUIThemeOverride
  }
}
