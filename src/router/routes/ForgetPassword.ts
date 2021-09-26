import { RouteRecordRaw } from 'vue-router'
import { RouterRouteNameEnum } from '/@/datas/enums/RouterRouteNameEnum'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'

/**
 * 忘记密码
 */
export const ForgetPassword: RouteRecordRaw = {
  path: RouterRoutePathEnum.FORGET_PASSWORD,
  name: RouterRouteNameEnum.FORGET_PASSWORD,
  component: () => import('/@/views/ForgetPassword/index.vue')
}
