<script setup lang="ts">
  import { RouterRoutePathEnum } from '/@/datas/enums/RouterRoutePathEnum'
  import { RouterLink } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { NButton } from 'naive-ui'
  // i18n
  const { t } = useI18n()
</script>

<template>
  <div class="text-right">
    <span class="text-xs">{{ t('SignInPage.NotRegisteredYet') }}</span>
    <NButton text type="primary">
      <RouterLink class="text-xs" :to="RouterRoutePathEnum.SIGN_UP">
        {{ t('SignInPage.CreateAnAccount') }}
      </RouterLink>
    </NButton>
  </div>
</template>

<style lang="scss"></style>
