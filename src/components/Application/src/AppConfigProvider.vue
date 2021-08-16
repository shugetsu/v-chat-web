<script setup lang="ts">
  import { NConfigProvider, NGlobalStyle } from 'naive-ui'
  import { useNaiveUILocale } from '../../../hooks/locales/useNaiveUILocale'
  import { useNaiveUIThemeMode } from '/@/hooks/themes/useNaiveUIThemeMode'
  const { naiveUILocale } = useNaiveUILocale()
  const { naiveUIThemeMode } = useNaiveUIThemeMode()
</script>

<template>
  <NConfigProvider
    abstract
    :theme="naiveUIThemeMode"
    :locale="naiveUILocale.locale"
    :date-locale="naiveUILocale.dateLocale"
  >
    <slot></slot>
    <NGlobalStyle />
  </NConfigProvider>
</template>

<style lang="scss"></style>
