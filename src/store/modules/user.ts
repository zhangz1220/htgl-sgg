//引入路由
import { constantRoute } from '@/router/router'
import { defineStore } from 'pinia'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入接口
import { reqLogin, userInfo } from '@/api/user'


//创建用户相关小仓库
let useUserStore = defineStore('User', {
  state: () => {
    return {
      token: GET_TOKEN(), //用户唯一标识 token
      menuRouters: constantRoute,
      userinfo: {
        username: '',
        userId: '',
        avatar: '',
        avatar2: '',
        desc: '',
        password: '',
        roles: '',
      }
    }
  },
  //处理 异步|逻辑
  actions: {
    //登录
    async userLogin(loginForm) {
      //登录请求
      let result: any = await reqLogin(loginForm)
      console.log(result);
      if (result.code == '200') {
        console.log('登陆成功')
        //保存token
        this.token = result.data.token
        SET_TOKEN(result.data.token)
        // localStorage.setItem('TOKEN', result.data.token)

        return result
      } else {
        return Promise.reject(new Error(result.data.message))

      }
    },
    //获取用户信息
    async getUserinfo() {
      console.log('userinfo')
      let result = await userInfo()
      if (result.code == '200') {
        //保存 用户信息
        this.userinfo = result.data.checkUser
        return 'ok'
      } else {
        return Promise.reject(new Error('获取用户信息失败!'))
      }
    },
    //退出登录
    async userLogout() {
      //应该调退出接口(目前没有接口)
      //清空token和用户信息
      this.token = ''
      REMOVE_TOKEN()
      this.userinfo = {}
    }
  },
  getters: {

  }
})

export default useUserStore;