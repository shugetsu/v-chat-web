<script setup lang="ts">
  import UnlockCard from './UnlockCard.vue'
  import DateTime from './DateTime.vue'
  import Wallpaper from './Wallpaper.vue'
  import TriggerGroup from './TriggerGroup.vue'
  import { onUnmounted, onMounted, ref } from 'vue'
  import { NElement } from 'naive-ui'
  import { random } from 'lodash'
  import { LockScreenSetting } from '/@/settings/LockScreenSetting'

  // 当前图片索引
  const curImageIndex = ref<number>(-1)
  // 图片 url
  const imgUrl = ref<string>(getImgUrl())
  // 是否显示解锁
  const isShowUnlock = ref<boolean>(false)
  // 判断是否自动切换
  if (LockScreenSetting.auto) {
    //定时器句柄
    let timer: Nullable<NodeJS.Timer> = null

    onMounted(() => {
      timer = setInterval(switchWallpaperHandler, LockScreenSetting.interval)
    })

    onUnmounted(() => {
      timer && clearInterval(timer)
    })
  }
  // 切换壁纸处理
  function switchWallpaperHandler() {
    imgUrl.value = getImgUrl()
  }
  // 获取图片
  function getImgUrl() {
    if (LockScreenSetting.mode === 'sequence') {
      // 顺序
      curImageIndex.value = ++curImageIndex.value % LockScreenSetting.images.length
    } else if (LockScreenSetting.mode === 'random') {
      // 随机
      curImageIndex.value = random(0, LockScreenSetting.images.length - 1)
    }
    return `${LockScreenSetting.images[curImageIndex.value]}?t=${Date.now()}`
  }
</script>

<template>
  <NElement
    class="fixed flex justify-center items-center left-0 top-0 w-full h-full duration-700"
    :style="{ backgroundColor: 'var(--body-color)' }"
    @click.self="isShowUnlock = !isShowUnlock"
  >
    <Wallpaper :url="imgUrl" :dim="isShowUnlock" />

    <DateTime />

    <TriggerGroup @switch-img="switchWallpaperHandler" />

    <Transition enter-active-class="transition duration-400" enter-from-class="opacity-0" enter-to-class="opacity-100">
      <UnlockCard v-if="isShowUnlock" />
    </Transition>
  </NElement>
</template>

<style lang="scss"></style>
