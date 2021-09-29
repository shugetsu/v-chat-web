<script setup lang="ts">
  import Navigation from './Navigation/Navigation.vue'
  import { NCard, NDivider } from 'naive-ui'
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="relative flex flex-1 h-full items-center justify-center">
    <NCard class="w-920px h-600px">
      <Navigation />
      <NDivider vertical class="!h-full !m-0" />
      <RouterView />
    </NCard>
  </div>
</template>

<style lang="scss" scoped>
  ::v-deep(.n-card__content) {
    @apply flex overflow-hidden '!p-0';
  }
</style>
