<script setup lang="ts">
  import { floor, random } from 'lodash'
  import { NElement } from 'naive-ui'
  import { computed } from 'vue'
  import { ThemeColorOptions } from '/@/datas/options/ThemeColorOptions'
  import { useThemeColor } from '/@/hooks/themes/useThemeColor'

  const { themeColor } = useThemeColor()
  // 随机颜色
  const randomColor = computed(() => {
    const colors = Object.values(ThemeColorOptions)
      .filter((item) => item.value !== themeColor.value)
      .map((item) => item.primaryColor)
    const color = colors[floor(random(true) * colors.length)]
    return color
  })
</script>

<template>
  <NElement>
    <svg
      class="v-triangles-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="30"
      fill="none"
      viewBox="0 0 40 30"
      v-bind="$attrs"
    >
      <g>
        <g id="v-triangles-svg-primary-group">
          <path
            id="v-triangles-svg-primary-triangle"
            opacity="0.6"
            d="M23.52,15.09,37.89,6.8a1.19,1.19,0,0,1,1.79,1V24.42a1.18,1.18,0,0,1-1.77,1l-14.39-8.3A1.18,1.18,0,0,1,23.52,15.09Z"
          />
        </g>
        <g id="v-triangles-svg-random-group">
          <path
            id="v-triangles-svg-random-triangle-1"
            opacity="0.8"
            d="M16.59,15,31,6.73a1.19,1.19,0,0,1,1.79,1V24.35a1.17,1.17,0,0,1-1.76,1L16.59,17.06A1.17,1.17,0,0,1,16.59,15Z"
          />
          <path
            id="v-triangles-svg-random-triangle-2"
            opacity="0.8"
            d="M23.52,15.09,37.89,6.8a1.19,1.19,0,0,1,1.79,1V24.42a1.18,1.18,0,0,1-1.77,1l-14.39-8.3A1.18,1.18,0,0,1,23.52,15.09Z"
          />
        </g>
      </g>
    </svg>
  </NElement>
</template>

<style lang="scss">
  .v-triangles-svg {
    @apply cursor-pointer;

    &:hover {
      #v-triangles-svg-primary-triangle {
        @apply -translate-x-1/5;
      }

      #v-triangles-svg-random-triangle-1 {
        @apply -translate-x-2/5 opacity-0;
      }

      #v-triangles-svg-random-triangle-2 {
        @apply translate-x-0;
      }
    }

    #v-triangles-svg-random-group {
      fill: var(--primary-color);
    }

    #v-triangles-svg-primary-group {
      fill: v-bind('randomColor');
    }

    #v-triangles-svg-primary-triangle,
    #v-triangles-svg-random-triangle-1,
    #v-triangles-svg-random-triangle-2 {
      @apply transition-all transform ease duration-800;
    }

    #v-triangles-svg-random-triangle-2 {
      @apply translate-x-full;
    }
  }
</style>
