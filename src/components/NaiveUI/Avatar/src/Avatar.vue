<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { NAvatar, NImage, NButton } from 'naive-ui'
  import { computed, ref, watch } from 'vue'
  import { ensureCssUnit } from '/@/utils/helpers/ensureCssUnit'

  const props = withDefaults(
    defineProps<{
      /**
       * 图片来源
       */
      src?: string
      /**
       * 图片大小
       */
      size?: number
      /**
       * 是否显示编辑
       */
      edit?: boolean
      /**
       * 编辑图标
       */
      editIcon?: string
      /**
       * 编辑图标大小
       */
      editIconSize?: number
    }>(),
    {
      src: '',
      size: 50,
      edit: false,
      editIcon: 'mdi:image-edit',
      editIconSize: 15
    }
  )
  const emit = defineEmits<{
    (event: 'editClick'): void
    (event: 'error'): void
  }>()
  // 状态
  const status = ref<'loaded' | 'placeholder'>('placeholder')
  // css 变量
  const cssVars = computed(() => ({
    width: ensureCssUnit(props.size),
    height: ensureCssUnit(props.size)
  }))
  // NImage css 样式
  const nImageCssStyle = computed(() => ({
    width: cssVars.value.width,
    height: cssVars.value.height,
    transform: 'scale(1.1)'
  }))
  // VAvatar css 样式
  const vAvatarCssStyle = computed(() => ({
    width: cssVars.value.width,
    height: cssVars.value.height
  }))
  // 监听 props.src 变化
  watch(
    () => props.src,
    (newV, oldV) => {
      if (newV && newV !== oldV) {
        status.value = 'placeholder'
        const img = new Image()
        img.src = props.src
        img.onload = () => {
          status.value = 'loaded'
        }
        img.onerror = () => {
          emit('error')
        }
      }
    },
    { immediate: true }
  )
</script>

<template>
  <div class="relative" :style="vAvatarCssStyle">
    <NAvatar class="cursor-default" :size="size" v-bind="$attrs">
      <slot v-if="status === 'loaded'">
        <NImage class="block" :style="nImageCssStyle" :src="props.src" />
      </slot>
      <slot v-else-if="status === 'placeholder'" name="placeholder">
        <Icon :width="size" icon="ic:baseline-person" />
      </slot>
    </NAvatar>
    <slot v-if="edit" name="edit">
      <NButton class="absolute bottom-0 right-0" text @click="emit('editClick')">
        <Icon :width="props.editIconSize" :icon="props.editIcon" />
      </NButton>
    </slot>
  </div>
</template>

<style lang="scss"></style>
