import { RouteRecordRaw } from 'vue-router'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'

/**
 * 登录
 */
export const SignIn: RouteRecordRaw = {
  path: RouterRoutePathEnum.SIGN_IN,
  component: () => import('/@/views/SignIn/index.vue')
}
