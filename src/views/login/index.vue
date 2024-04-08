<template>
  <div class="bg">
    <div class="login">
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules">
        <h1>Hello</h1>
        <h1>欢迎来到甄选平台</h1>
        <el-form-item label="" prop="username">
          <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="账号" />
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="loginForm.password" type="password" :prefix-icon="Lock" placeholder="密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button class="login_btn" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { User, Lock } from '@element-plus/icons-vue' //引入图标组件
import request from '@/utils/request'
import { getTime } from '@/utils/time'
import { reactive, ref } from 'vue';
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'

let $router = useRouter() //获取路由器对象
let userStore = useUserStore()
//获取el-form组件
let loginFormRef = ref()

onMounted(() => {

})

let loginForm = reactive({ username: 'admin', password: '111111' })
let rules = {
  username: [
    { required: true, min: 2, max: 10, message: '账号长度至少两位', trigger: 'change' }
  ],
  password: [
    { required: true, min: 6, max: 15, message: '密码长度至少六位', trigger: 'change' }
  ]
}

//登录
const login = async () => {
  //表单校验
  await loginFormRef.value.validate()
  console.log('登录...')
  //调用store方法
  userStore.userLogin(loginForm).then(res => {
    $router.push('/layout')
    ElNotification({
      type: 'success',
      title: `HI,${getTime()}好`,
      message: '欢迎回来'
    })
    // userStore.getUserinfo() //获取用户信息 操作 放到路由前置守卫了
  }).catch(error => {
    ElNotification({
      type: 'error',
      message: error.message
    })
  })

}
</script>

<style scoped lang="scss">
.bg {
  width: 100vw;
  height: 100vh;
  // background-image: url('../../assets/images/bg_login.jpg');
  background-image: url('@/assets/images/bg_login.jpg');
  background-size: cover;

  .login {
    position: absolute;
    top: 40vh;
    left: 55vw;
    width: 450px;
    padding: 30px;
    color: #fff;
    background: #0b4e83;
    border-radius: 5px;

    h1 {
      margin-bottom: 20px;
      font-size: 22px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
