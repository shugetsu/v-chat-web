<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { NButton, NInputGroup } from 'naive-ui'

  const emit = defineEmits<{
    (event: 'switchImg', e: MouseEvent)
  }>()
</script>

<template>
  <div class="absolute right-0 bottom-0 mx-6 my-12">
    <NInputGroup>
      <NButton>
        <Icon :width="20" icon="uil:image-redo" @click="emit('switchImg', $event)" />
      </NButton>
    </NInputGroup>
  </div>
</template>

<style lang="scss"></style>
