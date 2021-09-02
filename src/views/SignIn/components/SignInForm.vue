<script setup lang="ts">
  import ForgetPasswordLink from './ForgetPasswordLink.vue'
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { NGrid, NInput, NButton, NCheckbox, NFormItemGridItem } from 'naive-ui'
  import { VForm, VFormItem } from '/@/components/NaiveUI/Form'
  import { signInFormRules } from '../composables/signInFormRules'
  import { signInFormData } from '../composables/signInFormData'
  import { signInHandler } from '../composables/signInHandler'

  const { t } = useI18n()
  // VForm 实例
  const vFormInstance = ref()
  // 表单验证规则
  const formRules = signInFormRules()
  // 表单数据
  const formData = signInFormData()
  // 登录处理
  const { loading, signIn } = signInHandler(vFormInstance, formData)
</script>

<template>
  <VForm class="mb-6" ref="vFormInstance" :model="formData" :rules="formRules" :disabled="loading">
    <VFormItem path="email" :label="t('SignInPage.Email')">
      <NInput v-model:value="formData.email" :placeholder="t('SignInPage.EnterEmail')" />
    </VFormItem>

    <VFormItem path="password" :label="t('SignInPage.Password')">
      <NInput v-model:value="formData.password" type="password" :placeholder="t('SignInPage.EnterPassword')" />
    </VFormItem>

    <NGrid :cols="2">
      <NFormItemGridItem :show-label="false">
        <NCheckbox v-model:checked="formData.rememberAccount">{{ t('SignInPage.RememberAccount') }}</NCheckbox>
      </NFormItemGridItem>

      <NFormItemGridItem :show-label="false">
        <ForgetPasswordLink />
      </NFormItemGridItem>
    </NGrid>

    <NButton type="primary" block circle :loading="loading" @click="signIn">
      {{ t('SignInPage.SignInButton') }}
    </NButton>
  </VForm>
</template>

<style lang="scss"></style>
