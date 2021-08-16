<script setup lang="ts">
  import { NConfigProvider, NGlobalStyle } from 'naive-ui'
  import { useNaiveUILocale } from '../../../hooks/locales/useNaiveUILocale'
  const { naiveUILocale } = useNaiveUILocale()
</script>

<template>
  <NConfigProvider :locale="naiveUILocale.locale" :date-locale="naiveUILocale.dateLocale" abstract>
    <slot></slot>
    <NGlobalStyle />
  </NConfigProvider>
</template>

<style lang="scss"></style>
