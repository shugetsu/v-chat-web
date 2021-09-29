<script lang="ts">
  const [ListItemGroupProvider, useListItemGroupInject] = useProvideInject<{
    activeValue: Ref<Array<number | string> | string | number>
    multiple: Ref<boolean>
    disabled: Ref<boolean>
  }>()

  export { useListItemGroupInject }
</script>

<script setup lang="ts">
  import { Ref, toRef } from 'vue'
  import { usePropsVModel } from '/@/hooks/core/usePropsVModel'
  import { useProvideInject } from '/@/hooks/core/useProvideInject'

  const props = withDefaults(
    defineProps<{
      /**
       * 活动列表项
       */
      value?: Array<number | string> | number | string
      /**
       * 是否多选
       * @default flase
       */
      multiple?: boolean
      /**
       * 是否禁用所有子级的 list-item 组件
       * @default false
       */
      disabled?: boolean
    }>(),
    {
      value: () => [],
      multiple: false,
      disabled: false
    }
  )
  const activeValue = usePropsVModel(props, 'value')

  ListItemGroupProvider({ activeValue, multiple: toRef(props, 'multiple'), disabled: toRef(props, 'disabled') })
</script>

<template>
  <slot></slot>
</template>

<style lang="scss"></style>
