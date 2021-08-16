<script setup lang="ts">
  import { computed } from 'vue'
  import { ensureCssUnit } from '/@/utils/helpers/ensureCssUnit'

  const props = withDefaults(
    defineProps<{
      /**
       * 图标名前缀
       * @default icon
       */
      prefix?: string
      /**
       * 图标名
       */
      name: string
      /**
       * 图标颜色
       * @default currentColor
       */
      color?: string
      /**
       * 图标大小
       * @default 16
       */
      size?: string | number
      /**
       * 图标宽度
       */
      width?: string | number
      /**
       * 图标高度
       */
      height?: string | number
    }>(),
    {
      prefix: 'icon',
      color: 'currentColor',
      size: 16
    }
  )

  const symbolId = computed(() => `#${props.prefix}-${props.name}`)

  const cssVars = computed(() => {
    const { size, width, height, color } = props
    return {
      color: color,
      width: ensureCssUnit(width ?? size),
      height: ensureCssUnit(height ?? size)
    }
  })
</script>

<template>
  <svg class="v-svg-icon" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<style lang="scss">
  .v-svg-icon {
    width: v-bind('cssVars.width');
    height: v-bind('cssVars.height');
    fill: v-bind('cssVars.color');
    @apply inline-block overflow-hidden align-baseline;
  }
</style>
