import { useI18n } from 'vue-i18n'
import { SignUpFormData } from './signUpFormData'
import { VFormItemRule } from '/@/components/NaiveUI/Form'
import { same } from '../../../components/NaiveUI/Form/src/validators/same'

type SignInFormRules = Partial<Record<keyof SignUpFormData, VFormItemRule[]>>

/**
 * @description 注册的表单验证规则
 * @return {SignInFormRules}
 */
export function signUpFormRules(formData: SignUpFormData): SignInFormRules {
  const { t } = useI18n()

  const formRules: SignInFormRules = {
    email: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('SignUpPage.Email')]),
        trigger: ['blur', 'input']
      },
      {
        type: 'email',
        message: () => t('Components.NaiveUI.Form.Types.Email', [t('SignUpPage.Email')]),
        trigger: ['blur', 'input']
      }
    ],
    verificationCode: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('SignUpPage.VerificationCode')]),
        trigger: ['blur', 'input']
      },
      {
        len: 6,
        message: () => t('Components.NaiveUI.Form.String.Len', [t('SignUpPage.VerificationCode'), 6]),
        trigger: ['blur', 'input']
      }
    ],
    password: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('SignUpPage.Password')]),
        trigger: ['blur', 'input']
      },
      {
        min: 6,
        max: 16,
        message: () => t('Components.NaiveUI.Form.String.Range', [t('SignUpPage.Password'), 6, 16]),
        trigger: ['blur', 'input']
      }
    ],
    confirmPassword: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('SignUpPage.ConfirmPassword')]),
        trigger: ['blur', 'input']
      },
      {
        validator: same(formData, 'password'),
        message: () => t('Components.NaiveUI.Form.Same', [t('SignUpPage.ConfirmPassword'), t('SignUpPage.Password')]),
        trigger: ['blur', 'input']
      }
    ],
    nickname: [
      {
        required: true,
        whitespace: true,
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('SignUpPage.Nickname')]),
        trigger: ['blur', 'input']
      }
    ],
    gender: [
      {
        required: true,
        type: 'number'
      }
    ],
    birthday: [
      {
        required: true,
        type: 'number',
        message: () => t('Components.NaiveUI.Form.Whitespace', [t('SignUpPage.Birthday')]),
        trigger: ['blur', 'input']
      }
    ]
  }

  return formRules
}
