import { isFunction, isUndefined } from 'lodash'
import { Slots, VNode } from 'vue'

/**
 * @description 获取插槽，防止插槽为空报错
 * @param {Slots} slots 插槽集合
 * @param {string} name 插槽名称
 * @param {any} data 传入插槽的数据
 * @return {VNode[] | null}
 */
export function getSlot(slots: Slots, name = 'default', data?: any): VNode[] | null {
  if (isUndefined(slots) || !isFunction(slots[name])) {
    return null
  }
  const slot = slots[name] as Function
  return slot(data)
}
