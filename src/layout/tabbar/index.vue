<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Breadcrumd></Breadcrumd>
    </div>
    <div class="tabbar_right">
      <Setting></Setting>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Breadcrumd from './breadcrumd/index.vue'
import Setting from './setting/index.vue'

</script>

<script lang="ts">
export default {
  name: 'Tabbar'
}
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, rgb(234, 224, 224), rgb(238, 236, 236), rgb(210, 207, 207));

  .tabbar_left {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }

  .tabbar_right {
    margin-right: 20px;
    display: flex;
    align-items: center;

  }
}
</style>
