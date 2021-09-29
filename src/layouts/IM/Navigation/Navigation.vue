<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { find, some } from 'lodash'
  import { NButton } from 'naive-ui'
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { VAppLockScreenToggle, VAppLogo } from '/@/components/Application'
  import { IMNavOptions } from '/@/datas/options/IMNavOptions'

  const { currentRoute, push } = useRouter()
  // 激活的导航路由路径
  const activeNavRoutePath = computed(() => {
    const navOption = find(IMNavOptions, (nav) => {
      return some(currentRoute.value.matched, (route) => route.path === nav.routePath)
    })
    return navOption?.routePath
  })
</script>

<template>
  <div class="flex flex-col items-center justify-center w-16 h-full py-4">
    <VAppLogo />

    <div class="flex flex-col items-center justify-center flex-1 py-16 gap-4">
      <NButton
        v-for="item in IMNavOptions"
        class="w-10 h-10"
        text
        :key="item.icon"
        :type="item.routePath === activeNavRoutePath ? 'primary' : 'default'"
        @click="push(item.routePath)"
      >
        <Icon :width="24" :icon="item.icon" />
      </NButton>
    </div>

    <div class="flex flex-col items-center justify-center gap-4">
      <VAppLockScreenToggle />
      <NButton class="w-10 h-10" text>
        <Icon :width="24" icon="topcoat:settings" />
      </NButton>
    </div>
  </div>
</template>

<style lang="scss"></style>
