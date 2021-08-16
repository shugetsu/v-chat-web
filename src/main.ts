// initialize-mongo-instance.mjs
import { createApp } from 'vue'
import App from './App.vue'

// 注册 svg 雪碧图脚本
import 'virtual:svg-icons-register'

// 注册 windicss 脚本
import 'virtual:windi.css'

// 设计相关样式
import '/@/design/index.scss'

import { setupStore } from './store'
import { setupI18n } from './locales'

const app = createApp(App)
// 安装 store
setupStore(app)
// 安装 i18n
await setupI18n(app)
app.mount('#app')
