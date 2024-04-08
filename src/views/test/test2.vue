<template>
  <div>
    home
    <img :src="useStore.userinfo.avatar" style="margin: 0 10px;width: 24px;height: 24px;border-radius: 24px;" alt="">
    {{ useStore.userinfo.username }}
  </div>
</template>
<script setup>
import { ref } from 'vue'
import useUserStore from '@/store/modules/user'

let useStore = ref({})
useStore.value = useUserStore()


</script>

<style scoped lang="scss"></style>
