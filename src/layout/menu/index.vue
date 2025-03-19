<template>
  <div class="logo">
    <img src="@/assets/images/bg_login.jpg" alt="">
    <div class="title">管理后台系统</div>
  </div>
  <el-scrollbar class="scrollbar">
    <!-- 菜单 -->
    <el-menu :collapse="LayOutSettingStore.fold ? true : false" background-color="#001529" class="el-menu-vertical-demo"
      :default-active="$route.path" text-color="#fff" @open="handleOpen" @close="handleClose"
      v-for="(item, index) in menuList" :key="item.path">

      <!-- 没有子路由 -->
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
          <el-icon>
            <!-- 图标 -->
            <!-- <Edit /> -->
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </template>

      <!-- 有子路由但是只有一个 -->
      <template v-if="item.children && item.children.length == 1">
        <el-menu-item v-if="!item.meta.hidden" :index="item.children[0].path" @click="goRoute">
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </el-menu-item>
      </template>

      <!-- 有多个子路由 -->
      <template v-if="item.children && item.children.length > 1">
        <!-- 折叠菜单 -->
        <el-sub-menu v-if="!item.meta.hidden" :index="index">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item-group v-for="(item2) in item.children" :key="item2.path">
            <el-menu-item v-if="!item2.meta.hidden" :index="item2.path" @click="goRoute">
              <el-icon>
                <component :is="item2.meta.icon"></component>
              </el-icon>
              {{ item2.meta.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </template>

    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
//获取路由对象
import { useRoute } from 'vue-router'
//获取路由器对象
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue';
import useUserStore from '@/store/modules/user' //获取路由list
let $route = useRoute() //获取路由对象
let $router = useRouter() //获取路由器对象
import useLayOutSettingStore from '@/store/modules/setting';

let LayOutSettingStore = useLayOutSettingStore()

let userStore = useUserStore()
let menuList = reactive([]) //路由list
menuList = userStore.menuRouters


const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

//点击菜单
const goRoute = (vc: any) => {
  console.log('menuList===', menuList)
  let path = vc.index
  console.log(path)

  console.log($router)

  $router.push(path)
}
</script>

<script lang="ts">
export default {
  name: 'menu'
}
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px 15px;
  color: #fff;
  // box-sizing: border-box;

  img {
    width: 30px;
    height: 30px;
    border-radius: 40px;
  }

  .title {
    margin-left: 10px;
    font-size: 20px;
  }
}

.scrollbar {
  width: 100%;
  height: calc(100vh - 50px);

  .el-menu {
    border-right: none;
  }
}

.el-menu-item.is-active {
  color: #fff;
  background-color: #2196F3;
}
</style>
