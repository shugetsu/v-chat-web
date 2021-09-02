<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { NRadioGroup, NGrid, NGridItem, NEllipsis } from 'naive-ui'
  import { VOverlapRectRadio } from '/@/components/NaiveUI/Radio'
  import { ThemeColorOptions } from '/@/datas/options/ThemeColorOptions'
  import { useThemeColor } from '/@/hooks/themes/useThemeColor'

  const { t } = useI18n()
  const { themeColor, setThemeColor } = useThemeColor() as any
</script>

<template>
  <NRadioGroup :value="themeColor" @update:value="setThemeColor">
    <NGrid :cols="2" yGap="10px" xGap="10px">
      <NGridItem v-for="item in ThemeColorOptions" :key="item.value">
        <VOverlapRectRadio :value="item.value" :linear-gradient="item.linearGradient">
          <NEllipsis class="!max-w-16 h-4 leading-4 text-sm">
            {{ t(item.label) }}
          </NEllipsis>
        </VOverlapRectRadio>
      </NGridItem>
    </NGrid>
  </NRadioGroup>
</template>

<style lang="scss"></style>
