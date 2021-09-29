<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { VAppConfigProvider, VAppSystemSettings, VAppLockScreen } from '/@/components/Application'
</script>

<template>
  <VAppConfigProvider>
    <RouterView />
    <VAppSystemSettings />
    <VAppLockScreen />
  </VAppConfigProvider>
</template>

<style lang="scss"></style>
