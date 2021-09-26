<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import { NInput, NDivider } from 'naive-ui'
  import { ensureCssUnit } from '/@/utils/helpers/ensureCssUnit'
  import { useRefInstances } from '/@/hooks/helpers/useRefInstances'

  const props = withDefaults(
    defineProps<{
      /**
       * 位数
       * @default 6
       */
      digit?: number
      /**
       * 绑定值
       * @default ''
       */
      value?: string
      /**
       * 是否自动聚焦
       * @default false
       */
      autofocus?: boolean
      /**
       * 文本框大小
       * @default 34
       */
      size?: number | string
      /**
       * 是否显示横杠
       * @default false
       */
      divider?: boolean
      /**
       * 横杠宽度
       * @default 12
       */
      dividerWidth?: number | string
    }>(),
    {
      digit: 6,
      value: '',
      autofocus: false,
      size: 34,
      divider: false,
      dividerWidth: 12
    }
  )
  const emit = defineEmits<{
    (event: 'update:value', value: string): void
    (event: 'complete'): void
  }>()
  // NInput 组件实例列表
  const [nInputInstances, setNInputInstance] = useRefInstances()
  // 渲染文本框的数量
  const renderInputs = Array.from(Array(props.digit), (_, k) => k)
  // 文本框的值
  const values = ref<string[]>(Array.from(Array(props.digit), (_, k) => props.value[k] ?? ''))
  // NInput 样式
  const nInputCssStyle = computed(() => ({
    width: ensureCssUnit(props.size),
    height: ensureCssUnit(props.size)
  }))
  // NDivider 样式
  const nDividerCssStyle = computed(() => ({
    width: ensureCssUnit(props.dividerWidth)
  }))
  // 设置激活的文本框
  function setActiveInput(index): void {
    const inputRef = nInputInstances.value[index]
    inputRef?.focus()
  }
  // 键盘按下
  function keydownHandler(e: KeyboardEvent, index: number): void {
    if (e.key === 'Backspace') {
      setTimeout(() => {
        const prevIndex = index - 1 >= 0 ? index - 1 : 0
        setActiveInput(prevIndex)
      })
    } else if (/^[a-z0-9]$/i.test(e.key)) {
      setTimeout(() => {
        const nextIndex = index + 1 <= props.digit - 1 ? index + 1 : props.digit - 1
        setActiveInput(nextIndex)
      })
    } else {
      e.preventDefault()
    }
  }
  // 键盘弹起
  function keyupHandler(_: KeyboardEvent, index: number): void {
    // 格式化 input 值，只能是 字母 或 数字
    values.value[index] = values.value[index].replace(/[^a-z0-9]/gi, '')
  }
  // 自动聚焦到下一个待输入的 input
  function autoFocusNextInput(): void {
    const index = values.value.findIndex((value) => value === '')
    const activeIndex = index >= 0 ? index : props.digit - 1
    setActiveInput(activeIndex)
  }
  // 文本框输入
  function inputHandler() {
    const value = values.value.join('')
    emit('update:value', value)
    if (value.length === props.digit) {
      emit('complete')
    }
  }

  onMounted(() => {
    props.autofocus && autoFocusNextInput()
  })
</script>

<template>
  <div class="v-input-group">
    <template v-for="index in renderInputs" :key="index">
      <NInput
        v-model:value="values[index]"
        placeholder=""
        :style="nInputCssStyle"
        :ref="setNInputInstance"
        :maxlength="1"
        @input="inputHandler()"
        @keydown="keydownHandler($event, index)"
        @keyup="keyupHandler($event, index)"
      />
      <NDivider v-if="props.divider && index < renderInputs.length - 1" class="!m-0" :style="nDividerCssStyle" />
    </template>
    <div class="v-input-group__overspread" @click="autoFocusNextInput"></div>
  </div>
</template>

<style lang="scss">
  .v-input-group {
    @apply relative flex w-full justify-between items-center;

    .n-input-wrapper {
      @apply p-0 text-center;
    }

    .v-input-group__overspread {
      @apply absolute w-full h-full left-0 top-0;
    }
  }
</style>
