/**
 * @date 2021-09-09 20:01:42
 * @lastEditTime 2021-09-26 11:54:49
 * @description 路由路径
 * @filePath /src/datas/enums/RouterRoutePathEnum.ts
 */

export const enum RouterRoutePathEnum {
  /**
   * 根
   */
  ROOT = '/',
  /**
   * 登录
   */
  SIGN_IN = '/sign-in',
  /**
   * 注册
   */
  SIGN_UP = '/sign-up',
  /**
   * 忘记密码
   */
  FORGET_PASSWORD = '/forget-password',
  /**
   * IM
   */
  IM = '/im',
  /**
   * 聊天
   */
  IM_CHATS = '/im/chats',
  /**
   * 房间
   */
  IM_CHATS_ROOM = '/im/chats/room/:id',
  /**
   * 通讯录
   */
  IM_CONTACTS = '/im/contacts',
  /**
   * 好友
   */
  IM_CONTACTS_FRIEND = '/im/contacts/friend/:id'
}
