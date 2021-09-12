<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { isFuture } from 'date-fns'
  import { GenderEnum } from '/@/datas/enums/GenderEnum'
  import { VWomanSvg } from '/@/components/Svg/WomanSvg'
  import { VMaleSvg } from '/@/components/Svg/MaleSvg'
  import { VCropperAvatarModal } from '/@/components/Cropper'
  import { signUpFormData } from '../composables/SignUpFormData'
  import { VAvatar } from '/@/components/NaiveUI/Avatar'
  import { signUpFormRules } from '../composables/signUpFormRules'
  import { signUpHandler } from '../composables/signUpHandler'
  import { VForm, VFormItem } from '/@/components/NaiveUI/Form'
  import { NInput, NButton, NDivider, NRadio, NRadioGroup, NDatePicker } from 'naive-ui'

  // i18n
  const { t } = useI18n()
  // VForm 组件实例
  const vFormInstance = ref<any>()
  // 表单数据
  const formData = signUpFormData()
  // 表单验证规则
  const formRules = signUpFormRules(formData)
  // 注册处理
  const { loading, signUp } = signUpHandler(vFormInstance, formData)
</script>

<template>
  <VForm class="block" ref="vFormInstance" :model="formData" :rules="formRules" :disabled="loading">
    <div class="flex items-center mb-6">
      <div class="flex-1">
        <VFormItem path="email" :label="t('SignUpPage.Email')">
          <NInput v-model:value="formData.email" :placeholder="t('SignUpPage.EnterEmail')" />
        </VFormItem>

        <VFormItem path="verificationCode" :label="t('SignUpPage.VerificationCode')">
          <div class="flex w-full gap-x-3">
            <NInput
              class="flex-1"
              v-model:value="formData.verificationCode"
              :placeholder="t('SignUpPage.EnterVerificationCode')"
            />
            <NButton>{{ t('SignUpPage.Send') }}</NButton>
          </div>
        </VFormItem>

        <VFormItem path="password" :label="t('SignUpPage.Password')">
          <NInput
            v-model:value="formData.password"
            type="password"
            show-password-on="mousedown"
            :placeholder="t('SignUpPage.EnterPassword')"
          />
        </VFormItem>

        <VFormItem path="confirmPassword" :label="t('SignUpPage.ConfirmPassword')">
          <NInput
            v-model:value="formData.confirmPassword"
            type="password"
            show-password-on="mousedown"
            :placeholder="t('SignUpPage.EnterConfirmPassword')"
          />
        </VFormItem>
      </div>

      <NDivider class="!h-240px !mx-10" vertical />

      <div class="flex-1">
        <VCropperAvatarModal v-model:avatar="formData.avatar">
          <template #activator="{ on }">
            <VAvatar
              class="block mx-auto cursor-pointer"
              round
              edit
              :src="formData.avatar"
              :size="80"
              :edit-icon-size="20"
              @edit-click="on"
            />
          </template>
        </VCropperAvatarModal>

        <VFormItem path="nickname" :label="t('SignUpPage.Nickname')">
          <NInput v-model:value="formData.nickname" :placeholder="t('SignUpPage.EnterNickname')" />
        </VFormItem>

        <VFormItem path="gender" :label="t('SignUpPage.Gender')">
          <NRadioGroup v-model:value="formData.gender">
            <NRadio :value="GenderEnum.WOMAN"><VWomanSvg class="-ml-1" /></NRadio>
            <NRadio :value="GenderEnum.MALE"><VMaleSvg class="-ml-1" /></NRadio>
          </NRadioGroup>
        </VFormItem>

        <VFormItem path="birthday" :label="t('SignUpPage.Birthday')">
          <NDatePicker
            v-model:value="formData.birthday"
            class="w-full"
            type="date"
            :placeholder="t('SignUpPage.SelectBirthday')"
            :is-date-disabled="isFuture"
          />
        </VFormItem>
      </div>
    </div>

    <NButton class="!w-350px mb-6 mx-auto" block type="primary" circle @click="signUp">{{
      t('SignUpPage.SignUpButton')
    }}</NButton>
  </VForm>
</template>

<style lang="scss"></style>
