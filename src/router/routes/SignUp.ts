import { RouteRecordRaw } from 'vue-router'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'

/**
 * 注册
 */
export const SignUp: RouteRecordRaw = {
  path: RouterRoutePathEnum.SIGN_UP,
  component: () => import('/@/views/SignUp/index.vue')
}
