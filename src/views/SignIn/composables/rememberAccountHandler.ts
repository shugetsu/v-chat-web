import { omit } from 'lodash-es'
import { AccountCacheData, SignInFormData } from './signInFormData'
import { LocalCacheKeyEnum } from '/@/datas/enums/LocalCacheKeyEnum'
import { createLocalCache } from '/@/utils/cache'

/**
 * @description 记住账号处理
 * @param {SignInFormData} signInFormData
 * @return {void}
 */
export function rememberAccountHandler(signInFormData: SignInFormData): void {
  const lCache = createLocalCache()

  if (signInFormData.rememberAccount) {
    // 有效期30天
    const ttl = 1000 * 60 * 60 * 24 * 30
    const value = omit(signInFormData, 'rememberAccount')
    lCache.set<AccountCacheData>(LocalCacheKeyEnum.ACCOUNT, value, { ttl })
  } else if (lCache.has(LocalCacheKeyEnum.ACCOUNT)) {
    lCache.remove(LocalCacheKeyEnum.ACCOUNT)
  }
}
