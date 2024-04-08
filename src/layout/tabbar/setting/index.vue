<template>
  <el-button :icon="Refresh" circle size="small" @click="updataRefsh" />
  <el-button :icon="FullScreen" circle size="small" @click="fullScreen" />
  <el-button :icon="Setting" circle size="small" />
  <img :src="useStore.userinfo.avatar" style="margin: 0 10px;width: 24px;height: 24px;border-radius: 24px;" alt="">

  <el-dropdown>
    <span class="el-dropdown-link">
      {{ useStore.userinfo.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { ArrowRight, Refresh, FullScreen, Setting } from '@element-plus/icons-vue'
import useLayOutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user'
//引入路由器
import { useRouter } from 'vue-router'

let LayOutSettingStore = useLayOutSettingStore()

let useStore = useUserStore()

let $router = useRouter() //获取路由器对象

//刷新按钮
const updataRefsh = () => {
  LayOutSettingStore.refsh = !LayOutSettingStore.refsh
}

//全屏切换
const fullScreen = () => {
  //DOM对象的属性，判断是不是全屏模式 true:全屏 null:不是全屏
  let full = document.fullscreenElement;
  if (!full) {
    //全屏
    document.documentElement.requestFullscreen();
  } else {
    //退出全屏
    document.exitFullscreen()
  }
}

//退出登录
const logout = async () => {
  await useStore.userLogout() //退出
  $router.push('/login')
}

</script>

<script lang="ts">
export default {
  name: 'Setting'
}
</script>

<style scoped lang="scss"></style>
