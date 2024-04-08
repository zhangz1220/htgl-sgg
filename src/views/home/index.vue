<template>
  <el-card class="box-card">
    <div style="display: flex;">
      <img :src="useStore.userinfo.avatar" style="margin: 0 10px;width: 80px;height: 80px;border-radius: 50%;" alt="">
      <div class="card-text">
        <p>{{ useStore.userinfo.username }}</p>
        <p>硅谷甄选平台</p>
      </div>
    </div>
  </el-card>
  <div style="text-align: center;padding-top: 20px;">
    <img src="@/assets/images/bg_home.jpg" alt="">
  </div>
</template>
<script setup>
import { ref } from 'vue'
import useUserStore from '@/store/modules/user'

let useStore = ref({})
useStore.value = useUserStore()


</script>

<style scoped lang="scss">
.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 10px;
  color: #454545;
  font-size: 18px;
  font-weight: bold;

  :nth-child(2) {
    color: gray;
    font-family: fangsong;
  }
}
</style>
