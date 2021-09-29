<script setup lang="ts">
  import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex flex-col gap-1 justify-center flex-1">
    <div class="flex items-center">
      <div class="flex-1 font-medium text-sm">Akizuki</div>
      <div class="text-xs leading-5" v:light="text-gray-500" v:dark="text-white">09:12</div>
    </div>
    <div class="flex items-center">
      <div class="flex-1 truncate text-xs" v:light="text-gray-500" v:dark="text-white">your name?</div>
      <Icon v:light="text-gray-500" v:dark="text-white" icon="ion:md-notifications-off" :width="12" />
    </div>
  </div>
</template>

<style lang="scss"></style>
