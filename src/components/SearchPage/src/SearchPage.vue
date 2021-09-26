<script lang="ts">
  type Status = 'normal' | 'search'

  const [SearchPageInputProvider, useSearchPageInputInject] = useProvideInject<{
    statusVModel: Ref<Status>
  }>()

  export { Status, useSearchPageInputInject }
</script>

<script setup lang="ts">
  import { Ref } from 'vue'
  import { usePropsVModel } from '/@/hooks/core/usePropsVModel'
  import { useProvideInject } from '/@/hooks/core/useProvideInject'

  const props = withDefaults(
    defineProps<{
      /**
       * 状态
       * @default normal
       */
      status?: Status
    }>(),
    {
      status: 'normal'
    }
  )
  // @ts-ignore
  const emit = defineEmits<{
    (event: 'update:status', status: string): void
  }>()
  // status v-model
  const statusVModel = usePropsVModel(props, 'status')
  // 提供者
  SearchPageInputProvider({ statusVModel })
</script>

<template>
  <div class="flex flex-col overflow-hidden">
    <slot name="header"></slot>

    <div class="flex flex-col flex-1 overflow-hidden" v-show="statusVModel === 'normal'">
      <slot name="normal"></slot>
    </div>

    <div class="flex flex-col flex-1 overflow-hidden" v-if="statusVModel === 'search'">
      <slot name="search"></slot>
    </div>
  </div>
</template>

<style lang="scss"></style>
