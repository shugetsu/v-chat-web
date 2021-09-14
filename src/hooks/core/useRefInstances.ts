import { onBeforeUpdate, Ref, ref } from 'vue'

type UseRefInstancesReturn = [Ref<any[]>, (ref: any) => void]

/**
 * @description ref 实例列表
 * @return {UseRefInstancesReturn}
 */
export function useRefInstances(): UseRefInstancesReturn {
  const refInstances = ref<any[]>([])

  function setRefInstance(ref: any) {
    refInstances.value.push(ref)
  }

  onBeforeUpdate(() => (refInstances.value = []))

  return [refInstances, setRefInstance]
}
