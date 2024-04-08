import { createApp } from 'vue'
// import App from './App.vue'
import App from '@/App.vue'

import router from './router' //引入路由

import pinia from './store' //引入仓库

// import Mock from './mock/index.ts' //引入mock

import ElementPlus from 'element-plus' //引入 element-plus
import 'element-plus/dist/index.css'
import '@/styles/index.scss' //公共样式
//element-plus 全局配置国际化的配置 中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//获取应用实例对象
const app = createApp(App)

// 导入所有图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(ElementPlus, {
  locale: zhCn,
})
//注册路由
app.use(router)
app.use(pinia)
// app.use(Mock)

//引入路由鉴权文件
import './permisstion'

// 
// import axios from 'axios';
// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     name1: 'zzz'
//   }
// })


// 


app.mount('#app')

console.log('环境变量：', import.meta.env)