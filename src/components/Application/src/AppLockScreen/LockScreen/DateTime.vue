<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref } from 'vue'
  import { useLocale } from '/@/hooks/locales/useLocale'
  import { LocaleEnum } from '/@/datas/enums/LocaleEnum'
  import { useDateFns } from '/@/hooks/helpers/useDateFns'

  const { format } = useDateFns()
  const { locale } = useLocale()
  //定时器句柄
  let timer: Nullable<NodeJS.Timer> = null
  // 时间戳
  const timestamp = ref<number>(Date.now())
  // 时间
  const time = computed(() => format(timestamp.value, 'HH:mm'))
  // 月日，周
  const date = computed(() => {
    const dateTransform = locale.value === LocaleEnum.ZH_CN ? 'MMMdo，EEEE' : 'MMM do，EEEE'
    return format(timestamp.value, dateTransform)
  })

  onMounted(() => {
    timer = setInterval(() => {
      timestamp.value = Date.now()
    }, 1000)
  })

  onUnmounted(() => {
    timer && clearInterval(timer)
  })
</script>

<template>
  <div class="absolute left-0 bottom-0 px-6 py-12 select-none">
    <div class="text-8xl mb-4">{{ time }}</div>
    <div class="text-5xl">{{ date }}</div>
  </div>
</template>

<style lang="scss"></style>
