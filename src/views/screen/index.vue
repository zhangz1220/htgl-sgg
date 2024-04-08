<template>
  <div class="container">
    <!-- 大屏 -->
    <div class="screen" ref="screen">
      <!-- 顶部 -->
      <div class="top">
        <Top></Top>
      </div>
      <!-- 底部 -->
      <div class="bottom">
        <!-- 左侧 -->
        <div class="left">
          <LeftTourist class="tourist"></LeftTourist>
          <LeftSex class="sex"></LeftSex>
          <LeftAge class="age"></LeftAge>
        </div>
        <!-- 中间 -->
        <div class="center">
          <!-- 地图 -->
          <CenterMap class="map"></CenterMap>
          <!-- 折线图 -->
          <CenterLine class="line"></CenterLine>
        </div>
        <!-- 右侧 -->
        <div class="right">
          <RightTourist class="tourist"></RightTourist>
          <RightSex class="sex"></RightSex>
          <RightAge class="age"></RightAge>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Top from './components/top/index.vue'
// 左侧组件
import LeftTourist from './components/leftTourist/index.vue'
import LeftSex from './components/leftSex/index.vue'
import LeftAge from './components/leftAge/index.vue'
// 中间组件
import CenterMap from './components/centerMap/index.vue'
import CenterLine from './components/centerLine/index.vue'
// 右侧组件
import RightTourist from './components/rightTourist/index.vue'
import RightSex from './components/rightSex/index.vue'
import RightAge from './components/rightAge/index.vue'
//获取数据大屏展示内容盒子的DOM元素
let screen = ref()

onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})

//定义大屏缩放比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w;
  const hh = window.innerHeight / h;
  return ww < hh ? ww : hh
}

//监听视口变化
window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}



</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/bg_screen.png') no-repeat;
  background-size: 100% 100%;

  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    top: 50%;
    left: 50%;
    transform-origin: left top; //设置中心点在左上角

    .top {
      width: 100%;
      height: 40px;
    }

    .bottom {
      display: flex;

      .left {
        flex: 1;
        height: 1040px;
        display: flex;
        flex-direction: column;

        .tourist {
          flex: 1.2;
        }

        .sex {
          flex: 1;
        }

        .age {
          flex: 1;
        }
      }

      .center {
        flex: 2;
        display: flex;
        flex-direction: column;

        .map {
          flex: 2.8;
        }

        .line {
          flex: 1;
        }
      }

      .right {
        flex: 1;
      }
    }
  }
}
</style>
