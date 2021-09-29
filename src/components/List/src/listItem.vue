<script setup lang="ts">
  import { isNumber, isString } from 'lodash-es'
  import { NElement, NDivider } from 'naive-ui'
  import { computed, ref } from 'vue'
  import { useListInject } from './List.vue'
  import { useListItemGroupInject } from './ListItemGroup.vue'

  const props = withDefaults(
    defineProps<{
      /**
       * 值
       */
      value?: number | string
      /**
       * 是否禁用
       * @default false
       */
      disabled?: boolean
      /**
       * 是否显示边框
       * @default false
       */
      bordered?: boolean
    }>(),
    {
      disabled: false,
      bordered: false
    }
  )
  const { disabled: listDisabled } = useListInject()

  const {
    activeValue,
    multiple,
    disabled: listItemGroupDisabled
  } = useListItemGroupInject({
    activeValue: ref(''),
    multiple: ref(false),
    disabled: ref(false)
  })
  // 是否禁用
  const isDisabled = computed(() => props.disabled || listItemGroupDisabled.value || listDisabled.value)
  // 是否激活
  const isActive = computed(() => {
    if (isNumber(activeValue.value) || isString(activeValue.value)) {
      return activeValue.value === props.value
    } else {
      return activeValue.value.includes(props.value!)
    }
  })
  // 点击处理
  function clickHandler() {
    if (isDisabled.value) {
      return
    }

    if (multiple.value) {
      const index = (activeValue.value as Array<number | string>).indexOf(props.value!)
      if (index >= 0) {
        ;(activeValue.value as Array<number | string>).splice(index, 1)
      } else {
        ;(activeValue.value as Array<number | string>).push(props.value!)
      }
    } else if (activeValue.value === '') {
      activeValue.value = props.value!
    } else {
      activeValue.value = ''
    }
  }
</script>

<template>
  <NElement class="v-list-item" :class="{ active: isActive, disabled: isDisabled }" @click="clickHandler">
    <div class="v-list-item__inner">
      <slot name="avatar"></slot>

      <slot></slot>

      <slot name="action"></slot>
    </div>

    <NDivider v-if="props.bordered" class="!my-0" />
  </NElement>
</template>

<style lang="scss">
  .v-list-item {
    @apply relative cursor-pointer;

    .v-list-item__inner {
      @apply h-full relative flex gap-3 px-4 py-3 z-10;
    }

    &::before {
      @apply absolute block left-0 right-0 top-0 bottom-0 bg-primary opacity-0 z-0 content-"";
    }

    &:hover::before {
      @apply opacity-10;
    }

    &.active {
      @apply text-primary;

      &::before {
        @apply '!opacity-20';
      }
    }

    &.disabled {
      @apply cursor-default;

      &:hover::before {
        @apply opacity-0;
      }
    }
  }
</style>
