<script setup lang="ts">
  import ConversationList from './ConversationList/index.vue'
  import { RouterView } from 'vue-router'
  import { NDivider } from 'naive-ui'
  import { VSuspense } from '/@/components/Suspense'
</script>

<template>
  <div class="flex h-full">
    <div class="flex w-300px pt-148px">
      <VSuspense>
        <ConversationList />
      </VSuspense>
    </div>

    <NDivider vertical class="!h-full !m-0" />

    <div class="flex-1 h-full">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
