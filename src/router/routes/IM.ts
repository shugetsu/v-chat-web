import { RouteRecordRaw } from 'vue-router'
import { RouterRouteNameEnum } from '/@/datas/enums/RouterRouteNameEnum'
import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'

/**
 * IM
 */
export const IM: RouteRecordRaw = {
  path: RouterRoutePathEnum.IM,
  name: RouterRouteNameEnum.IM,
  redirect: RouterRoutePathEnum.IM_CHATS,
  component: () => import('/@/layouts/IM/IMLayout.vue'),
  children: [
    {
      path: RouterRoutePathEnum.IM_CHATS,
      name: RouterRouteNameEnum.IM_CHATS,
      meta: {},
      component: () => import('/@/layouts/IM/Views/Chats/ChatsLayout.vue'),
      children: [
        {
          path: RouterRoutePathEnum.IM_CHATS_ROOM,
          name: RouterRouteNameEnum.IM_CHATS_ROOM,
          meta: {},
          props: true,
          component: () => import('/@/views/IM/Chats/Room/index.vue')
        }
      ]
    },
    {
      path: RouterRoutePathEnum.IM_CONTACTS,
      name: RouterRouteNameEnum.IM_CONTACTS,
      meta: {},
      component: () => import('/@/layouts/IM/Views/Contacts/ContactsLayout.vue'),
      children: [
        {
          path: RouterRoutePathEnum.IM_CONTACTS_FRIEND,
          name: RouterRouteNameEnum.IM_CONTACTS_FRIEND,
          meta: {},
          props: true,
          component: () => import('/@/views/IM/Contacts/Friend/index.vue')
        }
      ]
    }
  ]
}
