import { Slots } from 'vue'
import { getSlot } from './getSlot'

/**
 * @description 继承插槽
 * @param {Slots} slots
 * @param {string[]} excludeNames
 * @return {Slots}
 */
export function extendSlots(slots: Slots, excludeNames: string[] = []): Slots {
  const newSlots = {}

  for (const name in slots) {
    if (!excludeNames.includes(name)) {
      newSlots[name] = () => getSlot(slots, name)
    }
  }

  return newSlots
}
