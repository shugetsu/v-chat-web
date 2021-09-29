<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const props = defineProps<{
    message?: string
  }>()
  const { t } = useI18n()
</script>

<template>
  <div class="flex items-center justify-center h-[50px] max-h-full">
    {{ props.message || t('Components.AsyncComponent.LoadError') }}
  </div>
</template>

<style lang="scss"></style>
