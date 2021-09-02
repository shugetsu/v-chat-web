<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { VAppConfigProvider, VAppConfiguration } from '/@/components/Application'
</script>

<template>
  <VAppConfigProvider>
    <RouterView />
    <VAppConfiguration />
  </VAppConfigProvider>
</template>

<style lang="scss"></style>
