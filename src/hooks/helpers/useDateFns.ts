import { Locale as DateFnsLocale, format as dateFnsFormat } from 'date-fns'
import { useLocale } from '../locales/useLocale'
import { LocaleSetting } from '/@/settings/LocaleSetting'

interface UseDateFnsReturn {
  /**
   * @description 日期格式化
   * @param {Date | number} date
   * @param {string} formatStr
   * @param {FormatOptions} options
   * @return {string}
   */
  format: (date: Date | number, formatStr: string, options?: FormatOptions) => string
}

interface FormatOptions {
  locale?: DateFnsLocale
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  firstWeekContainsDate?: number
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYearTokens?: boolean
}

/**
 * @description date-fns
 * @return {UseDateFnsReturn}
 */
export function useDateFns(): UseDateFnsReturn {
  const { locale } = useLocale()

  function format(date: Date | number, formatStr: string, options?: FormatOptions) {
    return dateFnsFormat(date, formatStr, {
      locale: LocaleSetting.dateFnsAvailableLocales[locale.value],
      ...options
    })
  }

  return { format }
}
