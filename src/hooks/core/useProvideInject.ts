import { inject, provide } from 'vue'

type Provider<T> = (opts: T) => void

type UseInject<T> = (defValue?: T) => T

type UseProvideInjectReturn<T> = [Provider<T>, UseInject<T>]

/**
 * @description 提供与注入
 * @return {UseProvideInjectReturn<T>}
 */
export function useProvideInject<T>(): UseProvideInjectReturn<T> {
  const ctxSymbol = Symbol()

  function provider(payload: T) {
    provide<T>(ctxSymbol, payload)
  }

  function useInject(defValue?: T) {
    const ctx = inject(ctxSymbol, defValue)
    if (!ctx) {
      throw new Error(`useInject: 'context' 未定义，似乎您忘记在 Provider 中包装组件了`)
    }
    return ctx
  }

  return [provider, useInject]
}
