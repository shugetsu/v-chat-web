<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { VForm, VFormItem } from '/@/components/NaiveUI/Form'
  import { VInputGroup } from '/@/components/NaiveUI/Input'
  import { NInput, NButton } from 'naive-ui'
  import { forgetPasswordFormData } from '../composables/ForgetPasswordFormData'
  import { forgetPasswordFormRules } from '../composables/forgetPasswordFormRules'
  import { changePasswordHandler } from '../composables/changePasswordHandler'
  // i18n
  const { t } = useI18n()
  // VForm 组件实例
  const vFormInstance = ref<any>()
  // 表单数据
  const formData = forgetPasswordFormData()
  // 表单验证规则
  const formRules = forgetPasswordFormRules(formData)
  // 更改密码处理
  const { loading, changePassword } = changePasswordHandler(vFormInstance, formData)
</script>

<template>
  <VForm ref="vFormInstance" :model="formData" :rules="formRules" :disabled="loading">
    <VFormItem path="email" :label="t('ForgetPasswordPage.Email')">
      <NInput v-model:value="formData.email" :placeholder="t('ForgetPasswordPage.EnterEmail')" />
    </VFormItem>

    <VFormItem path="verifyCode" :label="t('ForgetPasswordPage.VerifyCode')">
      <div class="flex w-full gap-x-3">
        <VInputGroup v-model:value="formData.verifyCode" class="flex-1" />
        <NButton>{{ t('ForgetPasswordPage.Send') }}</NButton>
      </div>
    </VFormItem>

    <VFormItem path="password" :label="t('ForgetPasswordPage.NewPassword')">
      <NInput
        v-model:value="formData.password"
        type="password"
        show-password-on="mousedown"
        :placeholder="t('ForgetPasswordPage.EnterNewPassword')"
      />
    </VFormItem>

    <VFormItem path="confirmPassword" :label="t('ForgetPasswordPage.ConfirmNewPassword')">
      <NInput
        v-model:value="formData.confirmPassword"
        type="password"
        show-password-on="mousedown"
        :placeholder="t('ForgetPasswordPage.EnterConfirmNewPassword')"
      />
    </VFormItem>

    <NButton class="mb-6" type="primary" block circle @click="changePassword">{{ t('Common.Button.Confirm') }}</NButton>
  </VForm>
</template>

<style lang="scss"></style>
