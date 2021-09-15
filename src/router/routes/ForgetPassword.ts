import { RouteRecordRaw } from 'vue-router'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'

/**
 * 忘记密码
 */
export const ForgetPassword: RouteRecordRaw = {
  path: RouterRoutePathEnum.FORGET_PASSWORD,
  component: () => import('/@/views/ForgetPassword/index.vue')
}
