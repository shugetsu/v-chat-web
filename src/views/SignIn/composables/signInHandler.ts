import { ref, Ref } from 'vue'
import { rememberAccountHandler } from './rememberAccountHandler'
import { SignInFormData } from './signInFormData'

interface SignInHandlerReturn {
  /**
   * 加载
   */
  loading: Ref<boolean>
  /**
   * @description 登录
   * @return {Promise<void>}
   */
  signIn: () => Promise<void>
}

/**
 * @description 登录处理
 * @param {Ref} vFormInstance
 * @param {SignInFormData} signInFormData
 * @param {Ref} isRememberAccount
 * @return {SignInHandlerReturn}
 */
export function signInHandler(vFormInstance: Ref, signInFormData: SignInFormData): SignInHandlerReturn {
  // 加载
  const loading = ref<boolean>(false)

  /**
   * @description 登录
   * @return {Promise<void>}
   */
  async function signIn(): Promise<void> {
    vFormInstance.value.nFormInstance.validate((errors) => {
      if (!errors) {
        // 验证通过
        loading.value = true
        // 记住账号处理
        rememberAccountHandler(signInFormData)
        loading.value = false
      }
    })
  }

  return { loading, signIn }
}
