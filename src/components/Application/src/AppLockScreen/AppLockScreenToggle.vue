<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { NButton, NSpace } from 'naive-ui'
  import { useLockScreenStore } from '/@/store/modules/lockScreen'
  import { reactive } from 'vue'
  import { useModal } from '/@/components/NaiveUI/Modal/src/hooks/useModal'
  import { useI18n } from 'vue-i18n'
  import { VModal } from '/@/components/NaiveUI/Modal'
  import { VForm, VFormItem } from '/@/components/NaiveUI/Form'
  import { VInputGroup } from '/@/components/NaiveUI/Input'
  import { VSvgIcon } from '/@/components/Icon'

  const { t } = useI18n()
  const lockScreenStore = useLockScreenStore()
  const { useBind, hideModal, showModal } = useModal()

  const formData = reactive<{
    PIN: string
  }>({
    PIN: ''
  })

  const formRules = {
    PIN: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', ['PIN']),
        trigger: ['blur', 'input']
      },
      {
        len: 4,
        message: () => t('Components.NaiveUI.Form.String.Len', ['PIN', 4]),
        trigger: ['blur', 'input']
      }
    ]
  }

  function okHandler() {
    hideModal()
    lockScreenStore.setPIN(formData.PIN)
    lockScreenStore.setLock(true)
  }
</script>

<template>
  <NButton text @click="showModal">
    <Icon :width="24" icon="mdi-light:lock" />
  </NButton>

  <VModal class="w-[400px]" preset="card" title="设置PIN" :mask-closable="false" @use-bind="useBind">
    <VSvgIcon class="block mx-auto mb-6" name="lock_screen" :size="100" />
    <VForm :model="formData" :rules="formRules" :show-label="false">
      <VFormItem class="flex flex-col items-center" path="PIN">
        <VInputGroup v-model:value="formData.PIN" class="!w-[180px]" :digit="4" autofocus />
      </VFormItem>
    </VForm>

    <template #action>
      <NSpace class="!justify-end">
        <NButton type="info" @click="hideModal">{{ t('Common.Button.Cancel') }}</NButton>
        <NButton type="primary" @click="okHandler">{{ t('Common.Button.Ok') }}</NButton>
      </NSpace>
    </template>
  </VModal>
</template>

<style lang="scss"></style>
