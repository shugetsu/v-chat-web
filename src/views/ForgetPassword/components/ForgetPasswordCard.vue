<script setup lang="ts">
  import ForgetPasswordHeader from './ForgetPasswordHeader.vue'
  import ForgetPasswordForm from './ForgetPasswordForm.vue'
  import SignInLink from './SignInLink.vue'
  import { NCard } from 'naive-ui'
</script>

<template>
  <NCard class="w-400px">
    <ForgetPasswordHeader />
    <ForgetPasswordForm />
    <SignInLink />
  </NCard>
</template>

<style lang="scss"></style>
