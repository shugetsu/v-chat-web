<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { RouterLink } from 'vue-router'
  import { NButton } from 'naive-ui'
  import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'
  // i18n
  const { t } = useI18n()
</script>

<template>
  <NButton text type="primary">
    <RouterLink class="text-xs" :to="RouterRoutePathEnum.SIGN_IN">
      {{ t('ForgetPasswordPage.BackToTheSignIn') }}
    </RouterLink>
  </NButton>
</template>

<style lang="scss"></style>
