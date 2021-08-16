import { computed, ComputedRef, unref } from 'vue'
import { useLocale } from './useLocale'
import { LocaleSetting, NaiveLocale } from '/@/settings/LocaleSetting'
import { createLogger } from '/@/utils/logger'
import { isUnDef } from '/@/utils/tools/is'

interface ReturnNaiveUILocale {
  /**
   * Naive UI 区域
   */
  naiveUILocale: ComputedRef<NaiveLocale>
}

const logger = createLogger('useNaiveLocale')

/**
 * @description Naive UI 区域
 * @return {ReturnNaiveUILocale}
 */
export function useNaiveUILocale(): ReturnNaiveUILocale {
  const { locale } = useLocale()

  // Naive UI 区域
  const naiveUILocale = computed(() => {
    const availableLocale = LocaleSetting.naiveUIAvailableLocales[unref(locale)]

    if (isUnDef(availableLocale)) {
      logger.error(
        `Naive UI 可用区域列表中，找不到该 '${unref(locale)}' 区域，请在 'LocaleSetting.naiveUIAvailableLocales' 中配置`
      )
      return {} as NaiveLocale
    }

    return availableLocale
  })

  return {
    naiveUILocale
  }
}
