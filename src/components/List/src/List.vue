<script lang="ts">
  const [ListProvider, useListInject] = useProvideInject<{
    disabled: Ref<boolean>
  }>()

  export { useListInject }
</script>

<script setup lang="ts">
  import { NScrollbar } from 'naive-ui'
  import { Ref, toRef } from 'vue'
  import { useProvideInject } from '/@/hooks/core/useProvideInject'

  const props = withDefaults(
    defineProps<{
      /**
       * 是否禁用所有子级的 list-item 组件
       * @default false
       */
      disabled?: boolean
    }>(),
    {
      multiple: false,
      disabled: false
    }
  )

  ListProvider({ disabled: toRef(props, 'disabled') })
</script>

<template>
  <NScrollbar>
    <slot></slot>
  </NScrollbar>
</template>

<style lang="scss"></style>
