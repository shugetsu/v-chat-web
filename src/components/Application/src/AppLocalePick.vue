<script setup lang="ts">
  import { NDropdown } from 'naive-ui'
  import { VSvgIcon } from '/@/components/Icon'
  import { LocaleOptions } from '/@/datas/options/LocaleOptions'
  import { useLocale } from '/@/hooks/locales/useLocale'

  const { locale, setLocale } = useLocale() as any
  const localeDropdownOptions = Object.values(LocaleOptions).map(({ label, value: key }) => ({ label, key }))
</script>

<template>
  <NDropdown :value="locale" trigger="click" :options="localeDropdownOptions" @select="setLocale">
    <VSvgIcon :size="22" class="cursor-pointer" name="language" />
  </NDropdown>
</template>

<style lang="scss"></style>
