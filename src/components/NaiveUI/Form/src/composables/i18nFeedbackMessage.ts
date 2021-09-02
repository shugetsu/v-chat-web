import { nextTick, Ref, watch } from 'vue'
import { useLocale } from '/@/hooks/locales/useLocale'

/**
 * @description i18n 反馈消息
 * @param {Ref} nFormItemInstance
 * @return {void}
 */
export function i18nFeedbackMessage(nFormItemInstance: Ref): void {
  // 区域
  const { locale } = useLocale()

  // 监听区域变化（解决区域切换时，反馈消息没随之变化的问题）
  watch(locale, () => {
    if (nFormItemInstance.value && nFormItemInstance.value.hasFeedback) {
      nextTick(() => {
        nFormItemInstance.value.validate().catch(() => {})
      })
    }
  })
}
