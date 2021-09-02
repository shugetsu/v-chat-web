<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { NRadioGroup, NGrid, NGridItem, NEllipsis } from 'naive-ui'
  import { VOverlapSquareRadio } from '/@/components/NaiveUI/Radio'
  import { ThemeSkinOptions } from '/@/datas/options/ThemeSkinOptions'
  import { useThemeSkin } from '/@/hooks/themes/useThemeSkin'

  const { t } = useI18n()
  const { themeSkin, setThemeSkin } = useThemeSkin() as any
</script>

<template>
  <NRadioGroup :value="themeSkin" @update:value="setThemeSkin">
    <NGrid :cols="2" yGap="10px" xGap="10px">
      <NGridItem v-for="item in ThemeSkinOptions" :key="item.value">
        <VOverlapSquareRadio :value="item.value" :src="item.image">
          <NEllipsis class="!max-w-16 h-4 leading-4 text-sm">
            {{ t(item.label) }}
          </NEllipsis>
        </VOverlapSquareRadio>
      </NGridItem>
    </NGrid>
  </NRadioGroup>
</template>

<style lang="scss"></style>
