import { reactive } from 'vue'

export interface ForgetPasswordApiParams {
  /**
   * 邮箱
   */
  email: string
  /**
   * 验证码
   */
  verifyCode: string
  /**
   * 新密码
   */
  password: string
}

export type ForgetPasswordFormData = ForgetPasswordApiParams & {
  /**
   * 确认新密码
   */
  confirmPassword: string
}

/**
 * @description 忘记密码的表单数据
 * @return {ForgetPasswordFormData}
 */
export function forgetPasswordFormData(): ForgetPasswordFormData {
  const formData = reactive<ForgetPasswordFormData>({
    email: '',
    verifyCode: '',
    password: '',
    confirmPassword: ''
  })

  return formData
}
