import { defineStore } from 'pinia'
//引入接口
import { reqLogin } from '@/api/user'

//引入路由
import { constantRoute } from '@/router/router'

//创建用户相关小仓库
let useLayOutSettingStore = defineStore('setting', {
  state: () => {
    return {
      fold: false, //控制菜单折叠
      refsh: false, //刷新
    }
  },
  //处理 异步|逻辑
  actions: {

  },
  getters: {

  }
})

export default useLayOutSettingStore;