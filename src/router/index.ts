//路由配置
import { createRouter, createWebHashHistory } from 'vue-router'

import { constantRoute } from './router'

//创建路由器
const router = createRouter({
  //路由模式 hash
  history: createWebHashHistory(),
  //路由
  routes: constantRoute,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})
export default router;