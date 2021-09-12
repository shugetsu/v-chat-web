import { ref, Ref } from 'vue'
import { SignUpFormData } from './signUpFormData'

interface SignUpHandlerReturn {
  /**
   * 加载
   */
  loading: Ref<boolean>
  /**
   * @description 注册
   * @return {Promise<void>}
   */
  signUp: () => Promise<void>
}

/**
 * @description 注册处理
 * @param {Ref} vFormInstance
 * @param {SignUpFormData} signUpFormData
 * @return {SignUpHandlerReturn}
 */
export function signUpHandler(vFormInstance: Ref, signUpFormData: SignUpFormData): SignUpHandlerReturn {
  // 加载
  const loading = ref<boolean>(false)

  /**
   * @description 注册
   * @return {Promise<void>}
   */
  async function signUp(): Promise<void> {
    vFormInstance.value.nFormInstance.validate((errors) => {
      if (!errors) {
        // 验证通过
        loading.value = true
        console.log(signUpFormData)
        loading.value = false
      }
    })
  }

  return { loading, signUp }
}
