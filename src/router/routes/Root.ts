import { RouteRecordRaw } from 'vue-router'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'

/**
 * Root
 */
export const Root: RouteRecordRaw = {
  path: RouterRoutePathEnum.ROOT,
  redirect: RouterRoutePathEnum.SIGN_IN
}
