<script setup lang="ts">
  import { VSvgIcon } from '/@/components/Icon'
  import { useThemeMode } from '/@/hooks/themes/useThemeMode'

  const { handoverThemeMode } = useThemeMode()
</script>

<template>
  <div class="v-app-theme-mode-toggle" @click="handoverThemeMode">
    <VSvgIcon :size="14" name="sun" />
    <VSvgIcon :size="14" name="moon" />
    <i class="v-app-theme-mode-toggle-button" v:dark="translate-x-18px"></i>
  </div>
</template>

<style lang="scss">
  .v-app-theme-mode-toggle {
    @apply relative inline-flex items-center justify-between bg-gray-800 border rounded-full cursor-pointer w-50px h-28px px-6px border-gray-50;
  }

  .v-app-theme-mode-toggle-button {
    @apply absolute transition-transform transform bg-white rounded-full w-18px h-18px;
  }
</style>
