<script setup lang="ts">
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { VCropperImage } from '..'
  import { usePropsVModel } from '/@/hooks/core/usePropsVModel'
  import { NModal, NDivider, NAvatar, NButton, NSpace } from 'naive-ui'
  import { useI18n } from 'vue-i18n'
  import { VCropperOptions } from './lib/VCropper'

  const props = withDefaults(
    defineProps<{
      /**
       * 是否显示模态框
       */
      show?: boolean
      /**
       * 头像
       */
      avatar?: string
    }>(),
    {
      show: false,
      avatar: ''
    }
  )
  // @ts-ignore
  const emit = defineEmits<{
    (event: 'update:show', show: boolean): void
    (event: 'update:avatar', avatar: string): void
  }>()
  // 1i8n
  const { t } = useI18n()
  // 裁剪图片预览 class
  const previewCls = '.v-cropper-avatar-modal-preview'
  // VCropperImage 配置
  const vCropperImageOptions: VCropperOptions = {
    dragMode: 'move',
    center: false,
    guides: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
    background: false,
    minCropBoxWidth: 200,
    preview: previewCls
  }
  // VCropperImage 组件实例
  const vCropperImageInstance = ref<any>()
  // 是否显示模态框 v-model
  const showVModel = usePropsVModel(props, 'show')
  // 头像 v-model
  const avatarVModel = usePropsVModel(props, 'avatar')
  // 确定事件处理
  function onOkHandler(): void {
    avatarVModel.value = vCropperImageInstance.value.getCroppedBase64()
    showVModel.value = false
  }
</script>

<template>
  <slot
    name="activator"
    v-bind="{
      on: () => {
        showVModel = true
      }
    }"
  ></slot>

  <NModal
    v-model:show="showVModel"
    class="w-600px"
    preset="card"
    :title="t('Components.Cropper.CropperAvatarModal.Title')"
    :mask-closable="false"
  >
    <div class="flex items-center">
      <VCropperImage ref="vCropperImageInstance" :options="vCropperImageOptions" :src="props.avatar" />

      <NDivider class="!mx-6 !h-300px" vertical />

      <div class="flex flex-col items-center justify-between w-150px h-350px">
        <template v-for="size in [100, 80, 60]" :key="size">
          <NAvatar class="block" :class="previewCls.substring(1)" round :size="size">
            <Icon :width="size" icon="ic:baseline-person" />
          </NAvatar>
          <NDivider class="!my-0 text-sm" titlePlacement="center">{{ `${size} x ${size}` }}</NDivider>
        </template>
      </div>
    </div>

    <template #action>
      <div class="flex justify-between">
        <NButton type="primary" @click="vCropperImageInstance?.openFileDialog">
          <Icon icon="ic:sharp-add-photo-alternate" :width="20" />
        </NButton>
        <NSpace class="!justify-end">
          <NButton type="info" @click="showVModel = false">{{ t('Common.Button.Cancel') }}</NButton>
          <NButton type="primary" @click="onOkHandler">{{ t('Common.Button.Ok') }}</NButton>
        </NSpace>
      </div>
    </template>
  </NModal>
</template>

<style lang="scss"></style>
