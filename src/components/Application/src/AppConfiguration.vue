<script setup lang="ts">
  import { NDrawer, NDrawerContent, NDivider } from 'naive-ui'
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { VAppThemeModeToggle, VAppLocalePick, VAppThemeSkinPick, VppThemeColorPick } from '..'

  const { t } = useI18n()
  const show = ref<boolean>(false)
</script>

<template>
  <div class="fixed right-0 top-1/2" @click="show = !show">test</div>

  <NDrawer v-model:show="show" :width="300">
    <NDrawerContent class="text-center">
      <NDivider titlePlacement="center">{{ t('Components.Application.AppConfiguration.ThemeMode') }}</NDivider>
      <VAppThemeModeToggle />

      <NDivider titlePlacement="center">{{ t('Components.Application.AppConfiguration.SystemLanguage') }}</NDivider>
      <VAppLocalePick />

      <NDivider titlePlacement="center">{{ t('Components.Application.AppConfiguration.ThemeColor') }}</NDivider>
      <VppThemeColorPick />

      <NDivider titlePlacement="center">{{ t('Components.Application.AppConfiguration.ThemeSkin') }}</NDivider>
      <VAppThemeSkinPick />
    </NDrawerContent>
  </NDrawer>
</template>

<style lang="scss"></style>
