<script setup lang="ts">
  import FixedHeader from './FixedHeader/FixedHeader.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="relative flex h-full">
    <FixedHeader />
    <div class="relative z-0">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss"></style>
