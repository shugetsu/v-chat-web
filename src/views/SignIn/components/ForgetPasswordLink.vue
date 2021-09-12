<script setup lang="ts">
  import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'
  import { RouterLink } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { NButton } from 'naive-ui'
  // i18n
  const { t } = useI18n()
</script>

<template>
  <div class="w-full text-right">
    <NButton text type="primary">
      <RouterLink :to="RouterRoutePathEnum.FORGET_PASSWORD">{{ t('SignInPage.ForgetPassword') }}</RouterLink>
    </NButton>
  </div>
</template>

<style lang="scss" scoped></style>
