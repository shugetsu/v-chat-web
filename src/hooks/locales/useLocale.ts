import { computed, ComputedRef } from 'vue'
import { useLocaleStoreWithOut } from '/@/store/modules/locale'
import { i18n } from '/@/locales'
import { LocaleEnum } from '/@/datas/enums/LocaleEnum'
import { setHtmlLang } from '/@/utils/helpers/setHtmlLang'
import { dynamicLocaleMessages } from '/@/utils/helpers/dynamicLocaleMessages'
import { createLogger } from '/@/utils/logger'

interface ReturnLocale {
  /**
   * @description 设置区域
   * @param {LocaleEnum} locale
   * @return {Promise<void>}
   */
  setLocale: (locale: LocaleEnum) => Promise<void>
  /**
   * 区域
   */
  locale: ComputedRef<LocaleEnum>
}

const logger = createLogger('useLocale')

/**
 * @description 区域
 * @return {ReturnLocale}
 */
export function useLocale(): ReturnLocale {
  const localeStore = useLocaleStoreWithOut()

  // 区域
  const locale = computed<LocaleEnum>(() => localeStore.localeGetter)

  /**
   * @description 设置区域
   * @param {LocaleEnum} locale
   * @return {Promise<void>}
   */
  async function setLocale(locale: LocaleEnum): Promise<void> {
    // 设置 locale store
    localeStore.setLocale(locale)
    // 设置 html 语言
    setHtmlLang(locale)
    // 加载区域消息
    const messages = await dynamicLocaleMessages(locale)
    // 添加 i18n 区域消息
    i18n.global.setLocaleMessage(locale, messages)
    // 更改 i18n 当前区域
    if (i18n.mode === 'legacy') {
      i18n.global.locale = locale
    } else {
      ;(i18n.global.locale as any).value = locale
    }
    logger.debug(`当前区域 '${locale}'`)
  }

  return {
    setLocale,
    locale
  }
}
