<script setup lang="ts">
  import { ref } from 'vue'
  import { VList, VListItem } from '/@/components/List'
  import { VAvatar } from '/@/components/NaiveUI/Avatar'
  import { VNoDataContainer } from '/@/components/Container'
  import { usePage } from '/@/hooks/helpers/usePage'
  import { RouterRouteNameEnum } from '/@/datas/enums/RouterRouteNameEnum'

  const { go } = usePage()
  const listValues = ref<number[]>([5])
  const list = ref<string[]>(Array.from(Array(50), (_, v) => String(v)))

  function clickHandler(id: string) {
    go({ name: RouterRouteNameEnum.IM_CONTACTS_FRIEND, params: { id } })
  }
</script>

<template>
  <VNoDataContainer :no-data="!list.length">
    <VList v-model:value="listValues">
      <VListItem v-for="item in list" :key="item" :value="item" @click="clickHandler(item)">
        <template #avatar>
          <VAvatar circle src="" />
        </template>

        <div class="flex items-center font-medium text-sm">YuYin-{{ item }}</div>
      </VListItem>
    </VList>
  </VNoDataContainer>
</template>

<style lang="scss" scoped></style>
