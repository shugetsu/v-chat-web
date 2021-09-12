import { FormItemRuleValidator } from 'naive-ui/lib/form/src/interface'

/**
 * @description 相同验证器
 * @param {Model} model
 * @param {Path} path
 * @return {FormItemRuleValidator}
 */
export function same<Model extends Object, Path extends keyof Model>(model: Model, path: Path): FormItemRuleValidator {
  return (rule, value) => {
    if (value !== model[path]) {
      return new Error(`${rule.field} is inconsistent with ${path}`)
    }
  }
}
