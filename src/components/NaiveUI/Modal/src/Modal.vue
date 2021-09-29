<script setup lang="ts">
  import { NModal } from 'naive-ui'
  import { ref, watch } from 'vue'
  import { usePropsVModel } from '/@/hooks/core/usePropsVModel'
  import { ModalInstanceMethods } from './modal.d'

  const props = withDefaults(
    defineProps<{
      /**
       * 是否显示模态框
       * @default false
       */
      show?: boolean
    }>(),
    {
      show: false
    }
  )
  const emit = defineEmits<{
    (event: 'useBind', methods: ModalInstanceMethods): void
  }>()
  // 是否显示模态框 v-model
  const showVModel = usePropsVModel(props, 'show')
  const visible = ref<boolean>(showVModel.value)

  watch(
    () => visible.value,
    (newV) => (showVModel.value = newV)
  )

  emit('useBind', { show, hide })

  // @ts-ignore
  // 显示模态框
  function show() {
    visible.value = true
  }
  // @ts-ignore
  // 隐藏模态框
  function hide() {
    visible.value = false
  }
</script>

<template>
  <NModal size="small" v-bind="$attrs" v-model:show="visible">
    <template #[name]="data" v-for="name of Object.keys($slots)" :key="name">
      <slot :name="name" v-bind="data" :key="name"></slot>
    </template>
  </NModal>
</template>

<style lang="scss"></style>
