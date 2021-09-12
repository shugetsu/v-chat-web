import { reactive } from 'vue'
import { GenderEnum } from '/@/datas/enums/GenderEnum'

export interface SignUpApiParams {
  /**
   * 邮箱
   */
  email: string
  /**
   * 验证码
   */
  verificationCode: string
  /**
   * 密码
   */
  password: string
  /**
   * 头像
   */
  avatar: string
  /**
   * 昵称
   */
  nickname: string
  /**
   * 性别
   */
  gender: GenderEnum
  /**
   * 生日
   */
  birthday: string
}

export type SignUpFormData = Overwrite<
  SignUpApiParams,
  {
    /**
     * 确认密码
     */
    confirmPassword: string
    /**
     * 生日
     */
    birthday: number | null
  }
>

/**
 * @description 注册的表单数据
 * @return {SignUpFormData}
 */
export function signUpFormData(): SignUpFormData {
  const formData = reactive<SignUpFormData>({
    email: '',
    verificationCode: '',
    password: '',
    confirmPassword: '',
    avatar: '',
    nickname: '',
    gender: GenderEnum.WOMAN,
    birthday: null
  })

  return formData
}
