<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { NInput } from 'naive-ui'
  import { useI18n } from 'vue-i18n'
  import { useSearchPageInputInject } from './SearchPage.vue'
  import { usePropsVModel } from '/@/hooks/core/usePropsVModel'

  const props = withDefaults(
    defineProps<{
      /**
       * 文本框的值
       */
      value?: string
    }>(),
    {
      value: ''
    }
  )
  // @ts-ignore
  const emit = defineEmits<{
    (event: 'update:value', value: string): void
  }>()
  const { t } = useI18n()
  const { statusVModel } = useSearchPageInputInject()
  // value v-model
  const valueVModel = usePropsVModel(props, 'value')
  // 失焦处理
  function blurHandler() {
    if (valueVModel.value === '' || valueVModel.value == null) {
      statusVModel.value = 'normal'
    }
  }
  // 聚焦处理
  function focusHandler() {
    statusVModel.value = 'search'
  }
</script>

<template>
  <NInput
    v-model:value="valueVModel"
    type="text"
    :placeholder="t('Components.SearchPage.SearchPageInput.Search')"
    clearable
    @blur="blurHandler"
    @focus="focusHandler"
    v-bind="$attrs"
  >
    <template #prefix>
      <Icon :width="18" icon="eva:search-fill" />
    </template>
  </NInput>
</template>

<style lang="scss"></style>
