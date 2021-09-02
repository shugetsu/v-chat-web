<script setup lang="ts">
  import { useAttrs } from 'vue'
  import { NRadio, NElement } from 'naive-ui'
  import { random } from 'lodash-es'

  const props = withDefaults(
    defineProps<{
      /**
       * 图片url
       */
      src: string
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
  // 裁剪 id
  const clipPathId = String(random(true))
</script>

<template>
  <NElement>
    <NRadio v-bind="attrs" class="v-svg-overlap-square-radio">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 476"
        :width="props.width"
      >
        <defs>
          <clipPath :id="clipPathId">
            <rect class="cls-1" x="78.47" y="17.02" width="345.19" height="260" rx="19.28" />
          </clipPath>
        </defs>
        <g isolation="isolate">
          <path
            fill="var(--card-color)"
            stroke="var(--border-color)"
            stroke-width="2"
            d="M444.73,449H57.41c-22.28,0-40.34,1.74-40.34-22.48V202.11c0-39.42,44.32-59,69.33-30.47,39.13,44.66,94.33,86,164.67,86s125.54-41.31,164.66-86c25-28.55,69.34-8.95,69.34,30.47v224.4C485.07,450.73,467,449,444.73,449Z"
          />
          <rect
            fill="none"
            stroke="var(--border-color)"
            stroke-width="2"
            x="78.47"
            y="17.02"
            width="345.19"
            height="260"
            rx="19.28"
          />
          <g xmlns="http://www.w3.org/2000/svg" :clip-path="`url('#${clipPathId}')`">
            <image
              width="345"
              height="260"
              transform="translate(80.36 16.67)"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              :xlink:href="props.src"
            />
          </g>
        </g>
      </svg>

      <NRadio v-bind="attrs" class="absolute bottom-1/6 left-0 w-full flex justify-center">
        <slot></slot>
      </NRadio>
    </NRadio>
  </NElement>
</template>

<style lang="scss">
  .v-svg-overlap-square-radio {
    @apply relative;

    & > .n-radio__dot {
      @apply hidden;
    }

    .cls-1,
    .cls-4 {
      fill: none;
      stroke-miterlimit: 10;
      stroke: var(--border-color);
    }
  }
</style>
