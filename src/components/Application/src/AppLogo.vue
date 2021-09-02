<script setup lang="ts">
  import { NImage } from 'naive-ui'
  import { getAssetPath } from '/@/utils/helpers/getAssetPath'

  const props = withDefaults(
    defineProps<{
      /**
       * logo 宽度
       * @default 40
       */
      width?: number
      /**
       * logo 高度
       * @default 40
       */
      height?: number
    }>(),
    {
      width: 40,
      height: 40
    }
  )
</script>

<template>
  <NImage
    :width="props.width"
    :height="props.height"
    :src="getAssetPath('common/images/components/application/logo.png')"
  />
</template>

<style lang="scss"></style>
