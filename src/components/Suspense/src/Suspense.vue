<script setup lang="ts">
  import LoadError from './components/LoadError.vue'
  import Loading from './components/Loading.vue'
  import { isString } from 'lodash-es'
  import { onErrorCaptured, ref, Suspense } from 'vue'

  const isLoadError = ref<boolean>(false)
  const errorMessage = ref<string>('')

  function fallback() {}
  function pending() {}
  function resolve() {}

  onErrorCaptured((err: Error | string) => {
    isLoadError.value = true
    if (isString(err)) {
      errorMessage.value = err
    } else {
      errorMessage.value = err.message
    }
  })
</script>

<template>
  <Suspense @fallback="fallback" @pending="pending" @resolve="resolve">
    <template #default="data">
      <slot v-bind="data || {}"></slot>
    </template>

    <template #fallback>
      <LoadError v-if="isLoadError" :message="errorMessage" />
      <Loading v-else />
    </template>
  </Suspense>
</template>

<style lang="scss"></style>
