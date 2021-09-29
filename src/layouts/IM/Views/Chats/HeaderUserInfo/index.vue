<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { NButton } from 'naive-ui'
  import { VAvatar } from '/@/components/NaiveUI/Avatar'
</script>

<template>
  <div class="flex gap-3 px-4 py-5 items-center">
    <VAvatar circle src="" />

    <div class="flex flex-col gap-1 justify-center flex-auto">
      <div class="font-medium text-sm">Shugetsu</div>
      <div class="truncate max-w-40 text-xs text-gray-500">人间三千事，淡然一笑间。</div>
    </div>

    <NButton text>
      <Icon width="24" icon="eva:more-horizontal-outline" />
    </NButton>
  </div>
</template>

<style lang="scss"></style>
