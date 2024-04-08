<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Menu></Menu>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Tabbar></Tabbar>
    </div>
    <!-- 内容 -->
    <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Main></Main>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Menu from './menu/index.vue'
import Tabbar from './tabbar/index.vue'
import Main from './main/index.vue'
import useLayOutSettingStore from '@/store/modules/setting';

let LayOutSettingStore = useLayOutSettingStore()

</script>

<script lang="ts">
export default {
  name: 'Layout'
}

</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: #001529;
    transition: all .3s;

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - 260px);
    height: 50px;
    background: #fff;
    transition: all .3s;

    &.fold {
      left: $base-menu-min-width;
      width: calc(100% - $base-menu-min-width);
    }
  }

  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - 50px - 20px);
    position: absolute;
    top: 50px;
    left: $base-menu-width;
    overflow: auto;
    padding: 20px 20px 0;
    transition: all .3s;

    &.fold {
      left: $base-menu-min-width;
      width: calc(100% - $base-menu-min-width);
    }
  }
}
</style>
