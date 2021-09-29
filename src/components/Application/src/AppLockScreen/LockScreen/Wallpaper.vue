<script setup lang="ts">
  const props = defineProps<{
    /**
     * 图片 url
     */
    url: string
    /**
     * 是否模糊
     */
    dim: boolean
  }>()
</script>

<template>
  <div
    class="absolute left-0 top-0 w-full h-full filter bg-no-repeat bg-cover pointer-events-none transition-all"
    :class="{ 'blur-md': props.dim }"
    :style="{ backgroundImage: `url(${props.url})` }"
  ></div>
</template>

<style lang="scss"></style>
