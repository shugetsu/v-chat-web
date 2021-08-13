import { createApp } from 'vue'
import App from './App.vue'

// 注册 svg 雪碧图脚本
import 'virtual:svg-icons-register'

// 注册 windicss 脚本
import 'virtual:windi.css'

// 设计相关样式
import '/@/design/index.scss'

createApp(App).mount('#app')
