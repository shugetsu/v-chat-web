import { ref, Ref } from 'vue'
import { ForgetPasswordFormData } from './ForgetPasswordFormData'

interface ChangePasswordHandlerReturn {
  /**
   * 加载
   */
  loading: Ref<boolean>
  /**
   * @description 更改密码
   * @return {Promise<void>}
   */
  changePassword: () => Promise<void>
}

/**
 * @description 更改密码处理
 * @param {Ref} vFormInstance
 * @param {ForgetPasswordFormData} formData
 * @return {ChangePasswordHandlerReturn}
 */
export function changePasswordHandler(
  vFormInstance: Ref,
  formData: ForgetPasswordFormData
): ChangePasswordHandlerReturn {
  const loading = ref<boolean>(false)

  async function changePassword() {
    vFormInstance.value.nFormInstance.validate((errors) => {
      if (!errors) {
        // 验证通过
        loading.value = true
        console.log(formData)
        loading.value = false
      }
    })
  }

  return { loading, changePassword }
}
