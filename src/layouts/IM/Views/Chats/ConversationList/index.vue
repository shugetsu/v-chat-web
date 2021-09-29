<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { VList, VListItem } from '/@/components/List'
  import { VAvatar } from '/@/components/NaiveUI/Avatar'
  import { VNoDataContainer } from '/@/components/Container'
  import { usePage } from '/@/hooks/helpers/usePage'
  import { RouterRouteNameEnum } from '/@/datas/enums/RouterRouteNameEnum'
  import { Status } from '/@/components/SearchPage/src/SearchPage.vue'
  import { VSearchPage, VSearchPageInput } from '/@/components/SearchPage'
  import { NDivider } from 'naive-ui'
  import List from './List.vue'

  const { go } = usePage()
  const status = ref<Status>('normal')
  const value = ref<string>('')
  const list = ref<string[]>(Array.from(Array(50), (_, v) => String(v)))
  const searchList = computed(() => list.value.filter((item) => value.value.includes(item)))

  function clickHandler(id: string) {
    go({ name: RouterRouteNameEnum.IM_CHATS_ROOM, params: { id } })
  }

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 10000)
  })
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

    <template #normal><List :list="list" /></template>
    <template #search><List :list="searchList" /></template>
  </VSearchPage>
</template>

<style lang="scss" scoped></style>
