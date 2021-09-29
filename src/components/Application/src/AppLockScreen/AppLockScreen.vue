<script setup lang="ts">
  import LockScreen from './LockScreen/LockScreen.vue'
  import { useLockScreenStore } from '/@/store/modules/lockScreen'

  const lockScreenStore = useLockScreenStore()
</script>

<template>
  <LockScreen v-if="lockScreenStore.lockGetter" />
</template>

<style lang="scss"></style>
