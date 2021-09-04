<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { VAppConfigProvider, VAppSystemSettings } from '/@/components/Application'
</script>

<template>
  <VAppConfigProvider>
    <RouterView />
    <VAppSystemSettings />
  </VAppConfigProvider>
</template>

<style lang="scss"></style>
