<script lang="ts">
  const [AppConfigProvider, useAppConfigProvider] = useProvideInject<{
    naiveUIThemeSkin: ComputedRef<ThemeSkin>
  }>()
  export { useAppConfigProvider }
</script>

<script setup lang="ts">
  import { NConfigProvider, NGlobalStyle } from 'naive-ui'
  import { useNaiveUILocale } from '/@/hooks/locales/useNaiveUILocale'
  import { useProvideInject } from '/@/hooks/core/useProvideInject'
  import { useNaiveUIThemeMode } from '/@/hooks/themes/useNaiveUIThemeMode'
  import { useNaiveUIThemeOverride } from '/@/hooks/themes/useNaiveUIThemeOverride'
  import { useNaiveUIThemeSkin } from '/@/hooks/themes/useNaiveUIThemeSkin'
  import { ThemeSkin } from '/@/themes'
  import { ComputedRef } from 'vue'

  const { naiveUILocale } = useNaiveUILocale()
  const { naiveUIThemeMode } = useNaiveUIThemeMode()
  const { naiveUIThemeOverride } = useNaiveUIThemeOverride()
  const { naiveUIThemeSkin } = useNaiveUIThemeSkin()

  // provider
  AppConfigProvider({ naiveUIThemeSkin })
</script>

<template>
  <NConfigProvider
    abstract
    :theme="naiveUIThemeMode"
    :theme-overrides="naiveUIThemeOverride"
    :locale="naiveUILocale.locale"
    :date-locale="naiveUILocale.dateLocale"
  >
    <slot></slot>
    <NGlobalStyle />
  </NConfigProvider>
</template>

<style lang="scss"></style>
