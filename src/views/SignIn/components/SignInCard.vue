<script setup lang="ts">
  import SignInHeader from './SignInHeader.vue'
  import SignInForm from './SignInForm.vue'
  import SignUpLink from './SignUpLink.vue'
  import { NCard } from 'naive-ui'
</script>

<template>
  <NCard class="w-400px">
    <SignInHeader />
    <SignInForm />
    <SignUpLink />
  </NCard>
</template>

<style lang="scss"></style>
