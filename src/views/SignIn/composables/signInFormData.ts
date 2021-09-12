import { reactive } from 'vue'
import { LocalCacheKeyEnum } from '/@/datas/enums/LocalCacheKeyEnum'
import { createLocalCache } from '/@/utils/cache'

export interface SignInApiParams {
  /**
   * 邮箱
   */
  email: string
  /**
   * 密码
   */
  password: string
}

export type AccountCacheData = SignInApiParams

export type SignInFormData = SignInApiParams & {
  /**
   * 记住账号
   */
  rememberAccount: boolean
}

/**
 * @description 登录的表单数据
 * @return {SignInFormData}
 */
export function signInFormData(): SignInFormData {
  const lCache = createLocalCache()
  const { email, password } = lCache.get<AccountCacheData>(LocalCacheKeyEnum.ACCOUNT, { email: '', password: '' })
  const formData = reactive<SignInFormData>({
    email,
    password,
    rememberAccount: lCache.has(LocalCacheKeyEnum.ACCOUNT)
  })

  return formData
}
