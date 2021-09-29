<script setup lang="ts">
  import { computed } from 'vue'
  import { Icon } from '@iconify/vue'
  import { VList, VListItem } from '/@/components/List'
  import { VAvatar } from '/@/components/NaiveUI/Avatar'
  import { VNoDataContainer } from '/@/components/Container'

  const props = defineProps<{
    list: any
  }>()
  const isNoData = computed(() => !props.list.length)
</script>

<template>
  <VNoDataContainer :no-data="isNoData">
    <VList>
      <VListItem v-for="item in props.list" :key="item" :value="item">
        <template #avatar>
          <VAvatar circle src="" />
        </template>

        <div class="flex flex-col gap-1 justify-center flex-1">
          <div class="flex items-center">
            <div class="flex-1 font-medium text-sm">Akizuki-{{ item }}</div>
            <div class="text-xs leading-5" v:light="text-gray-500" v:dark="text-white">09:12</div>
          </div>
          <div class="flex items-center">
            <div class="flex-1 truncate text-xs" v:light="text-gray-500" v:dark="text-white">your name?</div>
            <Icon v:light="text-gray-500" v:dark="text-white" icon="ion:md-notifications-off" :width="12" />
          </div>
        </div>
      </VListItem>
    </VList>
  </VNoDataContainer>
</template>

<style lang="scss"></style>
