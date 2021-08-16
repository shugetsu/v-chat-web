import { computed, ComputedRef, unref } from 'vue'
import { darkTheme } from 'naive-ui'
import { useThemeMode } from './useThemeMode'
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface'

interface ReturnNaiveUIThemeMode {
  /**
   * Naive UI 的主题
   */
  naiveUIThemeMode: ComputedRef<BuiltInGlobalTheme | null>
}

/**
 * @description Naive UI 的主题模式
 * @return {ReturnNaiveTheme}
 */
export function useNaiveUIThemeMode(): ReturnNaiveUIThemeMode {
  const { isDark } = useThemeMode()

  // Naive UI 主题模式
  const naiveUIThemeMode = computed(() => (unref(isDark) ? darkTheme : null))

  return {
    naiveUIThemeMode
  }
}
