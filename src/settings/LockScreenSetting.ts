/**
 * @date 2021-09-28 15:04:48
 * @lastEditTime 2021-09-28 17:41:19
 * @description 锁屏设置
 * @filePath /src/settings/LockScreenSetting.ts
 */

export interface LockScreenSettingOptions {
  /**
   * 是否自动切换
   */
  auto: boolean
  /**
   * 切换间隔时间（单位/ms）
   */
  interval: number
  /**
   * 切换模式 顺序|随机
   */
  mode: 'sequence' | 'random'
  /**
   * 图片
   */
  images: string[]
}

export const LockScreenSetting: LockScreenSettingOptions = {
  auto: true,
  interval: 1000 * 60 * 10,
  mode: 'sequence',
  images: ['https://api.mtyqx.cn/api/random.php']
}
