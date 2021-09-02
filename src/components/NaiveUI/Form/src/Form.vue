<script setup lang="ts">
  import { NForm } from 'naive-ui'
  import { ref } from 'vue'

  // NForm 实例
  const nFormInstance = ref()

  defineExpose({ nFormInstance })
</script>

<template>
  <NForm v-bind="$attrs" ref="nFormInstance">
    <slot></slot>
  </NForm>
</template>

<style lang="scss"></style>
