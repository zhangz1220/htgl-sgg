//路由鉴权
import router from '@/router/index'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

//引入进度条组件
import nprogress from 'nprogress'
import 'nprogress/nprogress.css' //需要引入进度条样式
nprogress.configure({ showSpinner: false });
//引入仓库
import useUserStore from './store/modules/user'
import pinia from './store'

const userStore = useUserStore(pinia)

//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  nprogress.start()//开始进度条
  //获取token
  const token = userStore.token
  //获取用户名
  const username = userStore.userinfo.username
  if (token) { //已登录
    if (to.path == '/login') {
      next({ path: '/layout' })
    } else {
      if (username) { //有用户信息
        next()
      } else { //没有用户信息
        try {
          await userStore.getUserinfo() //获取用户信息
          next()
        } catch (error) {
          //提示
          ElMessage.error(error.message)
          //获取用户信息失败 token过期
          await userStore.userLogout()
          next({ path: '/login' })
        }
      }
    }

  } else { //未登录
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

// //全局后置守卫
router.afterEach((to: any, from: any) => {

  nprogress.done()//结束进度条
})