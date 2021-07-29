import type { EnvConfigService } from '/$/utils'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { htmlPluginConfig } from './html'
import { imageminPluginConfig } from './imagemin'
import { svgIconsPluginConfig } from './svgIcons'
import { windicssPluginConfig } from './windicss'
import { purgeIconsPluginConfig } from './purgeIcons'
import { compressionPluginConfig } from './compression'

export function vitePluginsConfig(isBuild: boolean, viteEnv: EnvConfigService<ViteEnv>) {
  return [
    vue(),
    vueJsx(),
    purgeIconsPluginConfig(),
    windicssPluginConfig(),
    imageminPluginConfig(isBuild),
    compressionPluginConfig(isBuild),
    htmlPluginConfig(isBuild, viteEnv),
    svgIconsPluginConfig(isBuild)
  ]
}
