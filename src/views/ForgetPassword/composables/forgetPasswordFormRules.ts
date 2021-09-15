import { useI18n } from 'vue-i18n'
import { ForgetPasswordFormData } from './ForgetPasswordFormData'
import { VFormItemRule } from '/@/components/NaiveUI/Form'
import { same } from '/@/components/NaiveUI/Form/src/validators/same'

type ForgetPasswordFormRules = Partial<Record<keyof ForgetPasswordFormData, VFormItemRule[]>>

/**
 * @description 验证码的表单验证规则
 * @return {ForgetPasswordFormRules}
 */
export function forgetPasswordFormRules(formData: ForgetPasswordFormData): ForgetPasswordFormRules {
  const { t } = useI18n()

  const formRules: ForgetPasswordFormRules = {
    email: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('ForgetPasswordPage.Email')]),
        trigger: ['blur', 'input']
      },
      {
        type: 'email',
        message: () => t('Components.NaiveUI.Form.Types.Email', [t('ForgetPasswordPage.Email')]),
        trigger: ['blur', 'input']
      }
    ],
    verifyCode: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('ForgetPasswordPage.VerifyCode')]),
        trigger: ['blur', 'input']
      },
      {
        len: 6,
        message: () => t('Components.NaiveUI.Form.String.Len', [t('ForgetPasswordPage.VerifyCode'), 6]),
        trigger: ['blur', 'input']
      }
    ],
    password: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('ForgetPasswordPage.NewPassword')]),
        trigger: ['blur', 'input']
      },
      {
        min: 6,
        max: 16,
        message: () => t('Components.NaiveUI.Form.String.Range', [t('ForgetPasswordPage.NewPassword'), 6, 16]),
        trigger: ['blur', 'input']
      }
    ],
    confirmPassword: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('ForgetPasswordPage.ConfirmNewPassword')]),
        trigger: ['blur', 'input']
      },
      {
        validator: same(formData, 'password'),
        message: () =>
          t('Components.NaiveUI.Form.Same', [
            t('ForgetPasswordPage.ConfirmNewPassword'),
            t('ForgetPasswordPage.NewPassword')
          ]),
        trigger: ['blur', 'input']
      }
    ]
  }

  return formRules
}
