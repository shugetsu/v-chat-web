<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { Status } from '/@/components/SearchPage/src/SearchPage.vue'
  import { VSearchPage, VSearchPageInput } from '/@/components/SearchPage'
  import { Icon } from '@iconify/vue'
  import { NDivider, NCard } from 'naive-ui'
  import { VList, VListItem } from '/@/components/List'
  import { VAvatar } from '/@/components/NaiveUI/Avatar'
  import { VNoDataContainer } from '/@/components/Container'

  const status = ref<Status>('normal')
  const value = ref<string>('')
  const listValues = ref<number[]>([5])
  const list = ref<string[]>(Array.from(Array(50), (_, v) => String(v)))
  const searchList = computed(() => list.value.filter((item) => value.value.includes(item)))
</script>

<template>
  <VSearchPage v-model:status="status" class="relative z-10">
    <template #header>
      <NDivider class="!my-0" />
      <div class="flex items-center pr-4">
        <VSearchPageInput v-model:value="value" />
        <Icon :width="24" icon="akar-icons:plus" />
      </div>
      <NDivider class="!my-0" />
    </template>

    <template #search>
      <NCard class="h-450px" :bordered="false">
        <VNoDataContainer :no-data="!searchList.length">
          <VList v-model:value="listValues">
            <VListItem v-for="item in searchList" :key="item" :value="item">
              <template #avatar>
                <VAvatar :size="50" circle src="" />
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
      </NCard>
    </template>
  </VSearchPage>
</template>

<style lang="scss" scoped>
  ::v-deep(.n-input) {
    @apply '!bg-transparent !rounded-none';

    .n-input__input-el {
      @apply '!h-14 !outline-transparent';
    }

    .n-input__border,
    .n-input__state-border {
      @apply '!hidden';
    }
  }
</style>
