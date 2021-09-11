import { isUndefined } from 'lodash'
import { computed, getCurrentInstance, Ref, ref, WritableComputedRef } from 'vue'

/**
 * @description 双向绑定 props
 * @param {Props} props
 * @param {Prop} prop
 * @param {(value?: Props[Prop]) => Props[Prop]} transformIn
 * @param {(value: Props[Prop]) => Props[Prop]} transformOut
 * @return {WritableComputedRef<Props[Prop]>}
 *
 * @example
 * // 声明 props
 * const props = defineProps<{
 *   value: string
 * }>()
 *
 * // 声明 emit 事件
 * const emit = defineEmits<{
 *   (event: 'update:value', value: string): void
 * }>
 *
 * // 双向绑定
 * const valueVModel = usePropVModel(props, 'value')
 *
 * // 当改变 valueVModel 的值时，props.value 也会同步更新
 * valueVModel.value = 'test'
 */
export function usePropsVModel<Props extends Object, Prop extends keyof Props>(
  props: Props,
  prop: Prop,
  transformIn: (value?: Props[Prop]) => Props[Prop] = (value: any) => value,
  transformOut: (value: Props[Prop]) => Props[Prop] = (value: any) => value
): WritableComputedRef<Props[Prop]> {
  const ctx = getCurrentInstance()

  if (!ctx) {
    throw new Error(`usePropsVModel: 'context' 未定义，不能在 setup 之外使用`)
  }

  const defineProp = computed(() => {
    return ctx.vnode.props?.hasOwnProperty(prop) && !isUndefined(props[prop])
  })

  const value = ref(transformIn(props[prop])) as Ref<Props[Prop]>

  const valueVModel = computed<Props[Prop]>({
    get() {
      return defineProp.value ? transformIn(props[prop]) : value.value
    },
    set(newV) {
      value.value = newV
      defineProp.value && ctx.emit(`update:${prop}`, transformOut(newV))
    }
  })

  return valueVModel
}
