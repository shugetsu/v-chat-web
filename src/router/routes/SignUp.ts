import { RouteRecordRaw } from 'vue-router'
import { RouterRouteNameEnum } from '/@/datas/enums/RouterRouteNameEnum'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'

/**
 * 注册
 */
export const SignUp: RouteRecordRaw = {
  path: RouterRoutePathEnum.SIGN_UP,
  name: RouterRouteNameEnum.SIGN_UP,
  component: () => import('/@/views/SignUp/index.vue')
}
