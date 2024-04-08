<template>
  <el-icon style="margin-right: 10px;" @click="changeIcon">
    <!-- <Expand /> -->
    <component :is="LayOutSettingStore.fold?'Fold': 'Expand'"></component>
  </el-icon>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: item.path }" v-for="(item, index) in $route.matched" :key="item.path"
      v-show="item.meta.title">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
//获取路由对象
import { useRoute } from 'vue-router'
import useLayOutSettingStore from '@/store/modules/setting';
import { ArrowRight } from '@element-plus/icons-vue'
// import { ref } from 'vue'

let $route = useRoute() //获取路由对象
console.log('$route======', $route)
let LayOutSettingStore = useLayOutSettingStore()

const changeIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold //控制菜单折叠
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumd'
}
</script>

<style scoped lang="scss"></style>
