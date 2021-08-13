<script setup lang="ts">
  import { NConfigProvider, NGlobalStyle } from 'naive-ui'
</script>

<template>
  <NConfigProvider abstract>
    <slot></slot>
    <NGlobalStyle />
  </NConfigProvider>
</template>

<style lang="scss"></style>
