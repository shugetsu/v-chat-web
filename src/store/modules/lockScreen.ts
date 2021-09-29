/**
 * @date 2021-09-29 09:20:19
 * @lastEditTime 2021-09-29 09:26:22
 * @description 锁屏 store
 * @filePath /src/store/modules/lockScreen.ts
 */

import { defineStore } from 'pinia'
import { store } from '..'
import { createLocalCache } from '/@/utils/cache'

export interface LockScreenState {
  PIN: string
  lock: boolean
}

const ID = 'lock-screen'
const PINKey = `${ID}-PIN`
const lockKey = `${ID}-lock`
const lCache = createLocalCache()

export const useLockScreenStore = defineStore(ID, {
  state: (): LockScreenState => ({
    PIN: lCache.get<string>(PINKey, ''),
    lock: lCache.get<boolean>(lockKey, false)
  }),
  getters: {
    PINGetter(): string {
      return this.PIN
    },
    lockGetter(): boolean {
      return this.lock
    }
  },
  actions: {
    setPIN(pin: string): void {
      this.PIN = pin
      lCache.set(PINKey, pin)
    },
    setLock(lock: boolean): void {
      this.lock = lock
      lCache.set(lockKey, lock)
    }
  }
})

/**
 * @description 在 setup 函数外调用则需使用该函数
 */
export function useLockScreenStoreWithOut() {
  return useLockScreenStore(store)
}
