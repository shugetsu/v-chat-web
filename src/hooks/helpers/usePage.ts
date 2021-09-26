import {
  Router,
  useRouter,
  LocationAsPath,
  LocationAsRelativeRaw,
  RouteLocationOptions,
  RouteQueryAndHash
} from 'vue-router'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'
import { createLogger } from '/@/utils/logger'

type RouteLocationRaw =
  | (RouteQueryAndHash & Overwrite<LocationAsPath, { path: RouterRoutePathEnum }> & RouteLocationOptions)
  | (RouteQueryAndHash & LocationAsRelativeRaw & RouteLocationOptions)
  | RouterRoutePathEnum

interface UsePageRetrun {
  /**
   * @description 页面跳转
   * @param {RouteLocationRaw} to
   * @param {boolean} isReplace
   * @return {void}
   */
  go: (to: RouteLocationRaw, isReplace?: boolean) => void
}

const logger = createLogger('usePage')

/**
 * @description 处理错误
 * @param {Error} err
 * @return {void}
 */
function handleError(err: Error): void {
  logger.error(err)
}

/**
 * @description 页面
 * @param {Router} router
 * @return {UsePageRetrun}
 */
export function usePage(router: Router = useRouter()): UsePageRetrun {
  const { push, replace } = router

  function go(to: RouteLocationRaw, isReplace = false) {
    if (!to) {
      return
    }
    isReplace ? replace(to).catch(handleError) : push(to).catch(handleError)
  }

  return { go }
}
