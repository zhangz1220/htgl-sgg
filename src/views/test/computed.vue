<template>
  <div>
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    全名：{{ fullName }} <br>
    <button type="paimary" @click="changeFullname">修改全名</button> <br>
    <button type="paimary" @click="changeAge">修改年龄</button> <br>
    年龄：{{ age }} <br>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'

let firstName = ref('')
let lastName = ref('')
let age = ref(0)
let car = ref({ name: '宝马', price: '10' })

//这么写的计算属性 是只读的
let fullName = computed(() => {
  return firstName.value + lastName.value
})
//这么写的计算属性 可读可写
// let fullName = computed({
//   get() {
//     return firstName.value + lastName.value
//   },
//   set(val) {
//     firstName.value = val.split('-')[0]
//     lastName.value = val.split('-')[1]
//   }
// })
//修改计算属性值
const changeFullname = () => {
  console.log(fullName.value)
  fullName.value = 'li-si'
}

//
const changeAge = () => {
  age.value += 1
}

//监听 ref 定义的基本类型
const stopWatch = watch(age, (newValue, oldValue) => {
  console.log('年龄变化了', newValue, oldValue)
  if (newValue > 10) {
    stopWatch() //停止监听
  }
})
//监听 ref 定义的对象类型
const stopWatch2 = watch(car, (newValue, oldValue) => {
  console.log('car变化了', newValue, oldValue)
  // if (newValue > 10) {
  //   stopWatch() //停止监听
  // }
})

</script>

<style scoped lang="scss"></style>
