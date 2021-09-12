<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref } from 'vue'
  import { isImageFile } from '/@/utils/tools/file'
  import { VCropper, VCropperOptions } from './lib/VCropper'
  import { ensureCssUnit } from '/@/utils/helpers/ensureCssUnit'
  import { Icon } from '@iconify/vue'
  import { NUpload, NUploadDragger, NText, NSpin, useMessage } from 'naive-ui'
  import { useI18n } from 'vue-i18n'
  import { merge } from 'lodash'

  const props = withDefaults(
    defineProps<{
      /**
       * 图片来源
       */
      src?: string
      /**
       * 宽度
       */
      width?: number | string
      /**
       * 高度
       */
      height?: number | string
      /**
       * VCropper 配置
       */
      options?: VCropperOptions
    }>(),
    {
      src: '',
      width: 350,
      height: 350
    }
  )
  // i18n
  const { t } = useI18n()
  // NMessage
  const message = useMessage()
  // 是否显示上传
  const showUpload = ref<boolean>(!props.src)
  // 图片加载
  const imgLoading = ref<boolean>(!!props.src)
  // 图片元素
  const imgEl = ref<any>()
  // NUpload 组件实例
  const nUploadInstance = ref<any>(null)
  // VCropper 实例
  const vCropperInstance = ref<VCropper | null>(null)
  // css 变量
  const cssVars = computed(() => ({
    height: ensureCssUnit(props.height),
    width: ensureCssUnit(props.width)
  }))
  // css 样式
  const cssStyle = computed(() => ({
    height: cssVars.value.height,
    width: cssVars.value.width
  }))
  // 上传文件事件处理
  async function onBeforeUploadHandler({ file }): Promise<void> {
    if (!isImageFile(file.name)) {
      message.error(t('Common.Upload.OnlyImageFilesCanBeUploaded'))
      return
    }

    imgLoading.value = true
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file.file)
    fileReader.onload = (e) => {
      const dataURL = e.target?.result as string
      if (dataURL) {
        vCropperInstance.value?.replace(dataURL)
        imgLoading.value = false
        showUpload.value = false
      }
    }
  }

  onMounted(() => {
    vCropperInstance.value = new VCropper(
      imgEl.value,
      merge(props.options, {
        ready: () => {
          imgLoading.value = false
        }
      })
    )
  })

  onUnmounted(() => vCropperInstance.value?.destroy())

  defineExpose({
    openFileDialog: () => nUploadInstance.value.openFileDialog?.(),
    getCroppedBase64: () => (showUpload.value ? '' : vCropperInstance.value?.getCroppedBase64?.()),
    getCroppedBlob: async () => (showUpload.value ? null : await vCropperInstance.value?.getCroppedBlob?.())
  })
</script>

<template>
  <div class="v-cropper-image" :style="cssStyle">
    <NUpload
      v-show="showUpload"
      ref="nUploadInstance"
      accept="image/*"
      :show-file-list="false"
      :default-upload="false"
      @before-upload="onBeforeUploadHandler"
    >
      <NUploadDragger class="flex flex-col items-center justify-center v-cropper-UploadDragger" :style="cssStyle">
        <Icon icon="ic:sharp-add-photo-alternate" :width="70" />
        <NText>{{ t('Common.Upload.ClickOrDragTheFileToTheAreaToUpload') }}</NText>
      </NUploadDragger>
    </NUpload>

    <NSpin :show="imgLoading">
      <div :style="cssStyle">
        <img ref="imgEl" :src="props.src" class="hidden" />
      </div>
    </NSpin>
  </div>
</template>

<style lang="scss"></style>
