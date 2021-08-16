<script setup lang="ts">
  import { NSelect } from 'naive-ui'
  import { LocaleOptions } from '/@/datas/options/LocaleOptions'
  import { useLocale } from '/@/hooks/locales/useLocale'

  const { locale, setLocale } = useLocale()
</script>

<template>
  <NSelect :value="locale" @update-value="setLocale" :options="Object.values(LocaleOptions)" />
</template>

<style lang="scss"></style>
