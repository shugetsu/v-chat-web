<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { VTrianglesSvg } from '/@/components/Svg/TrianglesSvg'
  import { NDrawer, NDrawerContent, NDivider } from 'naive-ui'
  import { VAppThemeModeToggle, VAppLocalePick, VAppThemeSkinPick, VppThemeColorPick } from '..'

  const { t } = useI18n()
  const show = ref<boolean>(false)
</script>

<template>
  <VTrianglesSvg class="fixed right-0 top-1/2 transform -translate-y-5" @click="show = true" />

  <NDrawer v-model:show="show" :width="300">
    <NDrawerContent class="text-center">
      <NDivider titlePlacement="center">{{ t('Components.Application.AppSystemSettings.ThemeMode') }}</NDivider>
      <VAppThemeModeToggle />

      <NDivider titlePlacement="center">{{ t('Components.Application.AppSystemSettings.SystemLanguage') }}</NDivider>
      <VAppLocalePick />

      <NDivider titlePlacement="center">{{ t('Components.Application.AppSystemSettings.ThemeColor') }}</NDivider>
      <VppThemeColorPick />

      <NDivider titlePlacement="center">{{ t('Components.Application.AppSystemSettings.ThemeSkin') }}</NDivider>
      <VAppThemeSkinPick />
    </NDrawerContent>
  </NDrawer>
</template>

<style lang="scss"></style>
