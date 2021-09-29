import { ref } from 'vue'
import { createLogger } from '/@/utils/logger'
import { ModalInstanceMethods } from '../modal.d'

const logger = createLogger('useModal')

export function useModal() {
  const modalInstanceMethods = ref<Nullable<ModalInstanceMethods>>(null)

  function useBind(methods: ModalInstanceMethods) {
    modalInstanceMethods.value = methods
  }

  function getInstance() {
    if (!modalInstanceMethods.value) {
      logger.error(`'Modal' 实例未定义，请确保实例已绑定挂载`)
    }
    return modalInstanceMethods.value
  }

  function showModal() {
    getInstance()?.show?.()
  }

  function hideModal() {
    getInstance()?.hide?.()
  }

  return {
    useBind,
    showModal,
    hideModal
  }
}
