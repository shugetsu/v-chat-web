import { nextTick, onUnmounted, ref, unref } from 'vue'
import { GetVCroppedCanvasOptions, ImageOptions, VCropper } from '../lib/VCropper'
import { createLogger } from '/@/utils/logger'
import { NUpload } from 'naive-ui'

const logger = createLogger('useCropperImage')

export function useCropper() {
  const nUploadInstance = ref<ElRef<typeof NUpload>>(null)
  const cropperInstance = ref<Nullable<VCropper>>(null)
  const loaded = ref<boolean>(false)

  function bind(nUpload: MaybeRef<ElRef<typeof NUpload>>, cropper: MaybeRef<VCropper>) {
    if (loaded.value && (cropperInstance.value === unref(cropper) || nUploadInstance?.value === unref(nUpload))) {
      return
    }

    nUploadInstance.value = unref(nUpload)
    cropperInstance.value = unref(cropper)
    loaded.value = true

    onUnmounted(() => {
      cropperInstance.value = null
      loaded.value = false
    })
  }

  async function getInstance(): Promise<{ nUpload: typeof NUpload; cropper: VCropper }> {
    if (!cropperInstance.value) {
      if (loaded.value) {
        logger.error(`'CropperImage' 实例未定义，请确保实例已挂载`)
      } else {
        logger.error(`未绑定 'CropperImage' 实例，请使用 bind 方法绑定`)
      }
      await nextTick()
    }

    return {
      nUpload: nUploadInstance.value as typeof NUpload,
      cropper: cropperInstance.value as VCropper
    }
  }

  async function getCroppedBase64(
    croppedCanvasOptions?: GetVCroppedCanvasOptions,
    imageOptions?: ImageOptions
  ): Promise<string> {
    const { cropper } = await getInstance()
    return cropper.getCroppedBase64(croppedCanvasOptions, imageOptions)
  }

  async function getCroppedBlob(
    croppedCanvasOptions?: GetVCroppedCanvasOptions,
    imageOptions?: ImageOptions
  ): Promise<Blob> {
    const { cropper } = await getInstance()
    const blob = await cropper.getCroppedBlob(croppedCanvasOptions, imageOptions)
    return blob
  }

  async function openFileDialog() {
    const { nUpload } = await getInstance()
    nUpload.openFileDialog()
  }

  return { bind, getCroppedBase64, getCroppedBlob, openFileDialog }
}
