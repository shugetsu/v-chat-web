/**
 * @date 2021-09-04 11:07:37
 * @lastEditTime 2021-09-12 14:28:44
 * @description 图片裁剪器
 * @see https://github.com/fengyuanchen/cropperjs
 * @filePath /src/components/Cropper/src/lib/VCropper.ts
 */

import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export interface ImageOptions {
  type?: string
  quality?: any
}

export type VCropperOptions = Cropper.Options<HTMLImageElement>

const defaultOptions: Cropper.Options = {
  // 裁剪框不超过画布
  viewMode: 1,
  // 缩放比例 1:1
  aspectRatio: 1,
  // 裁剪框内显示虚线
  guides: true,
  // 裁剪框内显示十字准心
  center: true,
  // 裁剪框内高亮透明
  highlight: true,
  // 显示透明网格背景
  background: true,
  // 显示裁剪框外到画布的黑色透明遮罩
  modal: true,
  // 初始化时自动裁剪
  autoCrop: true,
  // 可移动图像
  movable: true,
  // 可旋转图像
  rotatable: true,
  // 可缩放图像
  zoomable: true,
  // 可通过触摸缩放图像
  zoomOnTouch: true,
  // 可通过滚轮缩放图像
  zoomOnWheel: true,
  // 滚轮单次缩放比例（默认：10%）
  wheelZoomRatio: 0.1,
  // 自动裁剪区域大小（百分比）
  autoCropArea: 0.8,
  // 可翻转图像
  scalable: true,
  // 可拖动裁剪框
  cropBoxMovable: true,
  // 启用在裁剪器上单击两次时在“裁剪”和“移动”之间切换拖动模式
  cropBoxResizable: true,
  // 容器最小宽度
  minContainerWidth: 200,
  // 容器最小高度
  minContainerHeight: 100,
  // 画布的最小宽度
  minCanvasWidth: 0,
  // 画布的最小高度
  minCanvasHeight: 0,
  // 裁剪框最小宽度
  minCropBoxWidth: 0,
  // 裁剪框最小高度
  minCropBoxHeight: 0,
  // 准备就绪钩子
  ready: undefined,
  // 当裁切开始，或裁切框开始更改的时候触发此事件
  cropstart: undefined,
  // 当移动或者更改裁切框时候触发此事件
  cropmove: undefined,
  // 当停止移动或者停止更改裁切框时候触发此事件
  cropend: undefined,
  // 当画布或裁切框发生变化时触发
  crop: undefined,
  // 缩放快捷键方式
  zoom: undefined
}

export class VCropper {
  /**
   * Cropper 实例
   */
  private cropperInstance: Cropper

  constructor(el: HTMLImageElement, options?: VCropperOptions) {
    this.cropperInstance = new Cropper(el, Object.assign(defaultOptions, options))
  }

  /**
   * @description 获取裁剪 blob 图片
   * @param {Cropper.GetCroppedCanvasOptions} croppedCanvasOptions
   * @param {ImageOptions} imageOptions
   * @return {Promise<Blob>}
   */
  getCroppedBlob(croppedCanvasOptions?: Cropper.GetCroppedCanvasOptions, imageOptions?: ImageOptions): Promise<Blob> {
    const croppedCanvas = this.cropperInstance.getCroppedCanvas(croppedCanvasOptions)
    const { type, quality } = imageOptions ?? {}
    return new Promise<Blob>((resolve, reject) => {
      croppedCanvas.toBlob((blob) => (blob ? resolve(blob) : reject(blob)), type, quality)
    })
  }

  /**
   * @description 获取裁剪 base64 图片
   * @param {Cropper.GetCroppedCanvasOptions} croppedCanvasOptions
   * @param {ImageOptions} imageOptions
   * @return {string}
   */
  getCroppedBase64(croppedCanvasOptions?: Cropper.GetCroppedCanvasOptions, imageOptions?: ImageOptions): string {
    const croppedCanvas = this.cropperInstance.getCroppedCanvas(croppedCanvasOptions)
    const { type, quality } = imageOptions ?? {}
    const base64 = croppedCanvas.toDataURL(type, quality)
    return base64
  }

  /**
   * @description 替换图片
   * @param {string} url
   * @param {boolean} onlyColorChanged
   * @return {void}
   */
  replace(url: string, onlyColorChanged?: boolean | undefined): void {
    this.cropperInstance.replace(url, onlyColorChanged)
  }

  /**
   * @description 清除裁剪框
   * @return {void}
   */
  clear(): void {
    this.cropperInstance.clear()
  }

  /**
   * @description 销毁 Cropper 实例
   * @return {void}
   */
  destroy(): void {
    this.cropperInstance.destroy()
  }

  /**
   * @description 将图像和裁剪框重置为其初始状态
   * @return {void}
   */
  reset(): void {
    this.cropperInstance.reset()
  }
}
