/**
 * @date 2021-09-15 15:33:04
 * @lastEditTime 2021-09-26 19:12:57
 * @description IM 导航
 * @filePath /src/datas/options/IMNavOptions.ts
 */

import { RouterRoutePathEnum } from '../enums/RouterRoutePathEnum'

interface IMNavOption {
  icon: string
  routePath: RouterRoutePathEnum
}

export const IMNavOptions: Record<string, IMNavOption> = {
  Chats: {
    icon: 'cib:wechat',
    routePath: RouterRoutePathEnum.IM_CHATS
  },
  Contacts: {
    icon: 'ri:contacts-fill',
    routePath: RouterRoutePathEnum.IM_CONTACTS
  }
}
