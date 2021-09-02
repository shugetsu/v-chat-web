export const enum RouterRoutePathEnum {
  /**
   * root
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
