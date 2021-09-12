<script setup lang="ts">
  import SignUpHeader from './SignUpHeader.vue'
  import SignUpForm from './SignUpForm.vue'
  import SigInLink from './SigInLink.vue'
  import { NCard } from 'naive-ui'
</script>

<template>
  <NCard class="w-800px">
    <SignUpHeader />
    <SignUpForm />
    <SigInLink />
  </NCard>
</template>

<style lang="scss"></style>
