<script setup lang="ts">
  import { VAppConfigProvider, VAppLocalePick, VAppThemeModeToggle } from '/@/components/Application'
</script>

<template>
  <VAppConfigProvider>
    <VAppLocalePick />
    <VAppThemeModeToggle />
  </VAppConfigProvider>
</template>

<style lang="scss"></style>
