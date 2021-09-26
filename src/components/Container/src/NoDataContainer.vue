<script setup lang="ts">
  import { NEmpty } from 'naive-ui'

  const props = withDefaults(
    defineProps<{
      /**
       * 是否无数据
       * @default false
       */
      noData?: boolean
    }>(),
    {
      noData: false
    }
  )
</script>

<template>
  <div class="flex flex-col w-full overflow-hidden">
    <div v-if="!props.noData" class="flex-1 overflow-hidden">
      <slot></slot>
    </div>

    <slot v-else name="empty">
      <NEmpty class="flex-1 justify-center" />
    </slot>
  </div>
</template>

<style lang="scss"></style>
