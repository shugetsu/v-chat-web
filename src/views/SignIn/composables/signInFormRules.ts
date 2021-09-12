import { useI18n } from 'vue-i18n'
import { SignInFormData } from './signInFormData'
import { VFormItemRule } from '/@/components/NaiveUI/Form'

type SignInFormRules = Partial<Record<keyof SignInFormData, VFormItemRule[]>>

/**
 * @description 登录的表单验证规则
 * @return {SignInFormRules}
 */
export function signInFormRules(): SignInFormRules {
  const { t } = useI18n()

  const formRules: SignInFormRules = {
    email: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('SignInPage.Email')]),
        trigger: ['blur', 'input']
      },
      {
        type: 'email',
        message: () => t('Components.NaiveUI.Form.Types.Email', [t('SignInPage.Email')]),
        trigger: ['blur', 'input']
      }
    ],
    password: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('SignInPage.Password')]),
        trigger: ['blur', 'input']
      },
      {
        min: 6,
        max: 16,
        message: () => t('Components.NaiveUI.Form.String.Range', [t('SignInPage.Password'), 6, 16]),
        trigger: ['blur', 'input']
      }
    ]
  }

  return formRules
}
