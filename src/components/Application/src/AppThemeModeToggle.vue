<script setup lang="ts">
  import { NTooltip } from 'naive-ui'
  import { useI18n } from 'vue-i18n'
  import { VSvgIcon } from '/@/components/Icon'
  import { ThemeModeOptions } from '/@/datas/options/ThemeModeOptions'
  import { useThemeMode } from '/@/hooks/themes/useThemeMode'

  const { t } = useI18n()
  const { themeMode, handoverThemeMode } = useThemeMode()
</script>

<template>
  <span class="cursor-pointer" @click="handoverThemeMode">
    <template v-for="item in ThemeModeOptions">
      <NTooltip v-if="item.value === themeMode" :key="item.value" trigger="hover">
        <template #trigger>
          <VSvgIcon :size="22" :name="item.svgIconName" />
        </template>
        {{ t(item.label) }}
      </NTooltip>
    </template>
  </span>
</template>

<style lang="scss"></style>
