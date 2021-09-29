<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { NButton, NInputGroup } from 'naive-ui'
  import { reactive } from 'vue'
  import { VForm, VFormItem } from '/@/components/NaiveUI/Form'
  import { VInputGroup } from '/@/components/NaiveUI/Input'
  import { useLockScreenStore } from '/@/store/modules/lockScreen'

  const lockScreenStore = useLockScreenStore()
  const formData = reactive<{
    PIN: string
  }>({
    PIN: ''
  })

  function unlockHandler() {
    if (formData.PIN === lockScreenStore.PIN) {
      lockScreenStore.setLock(false)
    }
  }
</script>

<template>
  <VForm :model="formData" inline label-placement="left" @keyup.enter="unlockHandler">
    <VFormItem label="PIN" path="PIN">
      <VInputGroup v-model:value="formData.PIN" class="!w-[180px]" :digit="4" autofocus />
    </VFormItem>
    <NInputGroup>
      <NButton class="w-[40px]" @click="unlockHandler">
        <Icon :width="20" icon="mdi-light:lock-unlocked" />
      </NButton>
      <NButton class="w-[40px]">
        <Icon :width="20" icon="mdi:logout" />
      </NButton>
    </NInputGroup>
  </VForm>
</template>

<style lang="scss"></style>
