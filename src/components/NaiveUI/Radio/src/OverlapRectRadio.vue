<script setup lang="ts">
  import { useAttrs } from 'vue'
  import { NRadio, NElement } from 'naive-ui'
  import { random } from 'lodash'

  const props = withDefaults(
    defineProps<{
      /**
       * 线性渐变
       */
      linearGradient: Array<{ offset: number; stopColor: string }>
      /**
       * 宽度
       * @default 120
       */
      width?: number
    }>(),
    {
      width: 120
    }
  )

  const attrs = useAttrs()
  // 渐变 id
  const linearGradientId = String(random(true))
</script>

<template>
  <NElement>
    <NRadio v-bind="attrs" class="v-svg-overlap-rect-radio">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 655 484"
        :width="props.width"
      >
        <defs>
          <linearGradient
            :id="linearGradientId"
            x1="77.41"
            y1="69.8"
            x2="554.26"
            y2="258.04"
            gradientTransform="translate(3.99 -7.37) rotate(-1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              v-for="(item, index) in props.linearGradient"
              :key="index"
              :offset="item.offset"
              :stop-color="item.stopColor"
            />
          </linearGradient>
        </defs>
        <g isolation="isolate">
          <path
            fill="var(--card-color)"
            stroke="var(--border-color)"
            stroke-width="2"
            d="M598,447.37,51.12,456.91c-16.57.29-30.06-2.9-30.35-19.47l-4.21-241A30,30,0,0,1,46,166l547.63,31.45a30,30,0,0,1,30.52,29.47l3.49,200C628,443.41,614.6,447.08,598,447.37Z"
          />
          <path
            :fill="`url('#${linearGradientId}')`"
            stroke="var(--border-color)"
            stroke-width="2"
            d="M100.56,284.07l446.93-7.8A30,30,0,0,0,577,245.75l-3.47-199A30,30,0,0,0,543,17.31L96.75,66.1A30,30,0,0,0,67.28,96.62L70,254.6A30,30,0,0,0,100.56,284.07Z"
          />
        </g>
      </svg>

      <NRadio v-bind="attrs" class="absolute bottom-1/6 left-0 w-full flex justify-center">
        <slot></slot>
      </NRadio>
    </NRadio>
  </NElement>
</template>

<style lang="scss">
  .v-svg-overlap-rect-radio {
    @apply relative;

    & > .n-radio__dot {
      @apply hidden;
    }
  }
</style>
