<script setup lang="ts">
  import { ref } from 'vue'
  import { NFormItem } from 'naive-ui'
  import { i18nFeedbackMessage } from './composables/i18nFeedbackMessage'

  // NFormItem 实例
  const nFormItemInstance = ref()
  // i18n 反馈消息
  i18nFeedbackMessage(nFormItemInstance)

  defineExpose({ nFormItemInstance })
</script>

<template>
  <NFormItem first v-bind="$attrs" ref="nFormItemInstance">
    <slot></slot>
  </NFormItem>
</template>

<style lang="scss"></style>
