<script setup lang="ts">
  import { NGradientText } from 'naive-ui'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <div class="relative flex items-center justify-center mb-6">
    <NGradientText :size="30" class="font-bold">{{ t('SignInPage.HeaderTitle') }}</NGradientText>
  </div>
</template>

<style lang="scss"></style>
