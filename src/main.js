// 主要职责：创建一个Vue应用（理解成之前的根实例）

// 1.导入createApp函数从Vue 中
import { createApp } from 'vue'

// 2.创建一个根组件App.vue导入到main
import App from './App.vue'

// 3.使用createApp创建应用实例
const app = createApp(App)

// 4.应用实例挂载到#app容器中
app.mount('#app')