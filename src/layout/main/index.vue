<template>
  <div>
    <!-- 路由组件出口的位置 -->
    <router-view v-slot="{ Component }">
      <!-- 过度动画 -->
      <transition name="fade">
        <component :is="Component" v-if="flag" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue';
// import { useRouter } from 'vue-router'
import useLayOutSettingStore from '@/store/modules/setting';

let LayOutSettingStore = useLayOutSettingStore()

//控制main组件 销毁和重建 刷新
let flag = ref(true)


//监听store里 refsh 变化 刷新操作
watch(() => LayOutSettingStore.refsh, () => {
  console.log('点击刷新了')
  flag.value = false //组件销毁
  nextTick(() => {
    flag.value = true //组件重建
  })
})

</script>

<script lang="ts">
export default {
  name: 'Main'
}
</script>

<style scoped lang = "scss" >
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}
</style>
