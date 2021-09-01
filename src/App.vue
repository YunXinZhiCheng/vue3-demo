<template>
  <div class="container">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  // 直接使用ref函数定义简单的数据类型   
  setup() {
    // name数据
    const name = ref('张三')
    // age数据
    const age = ref(18)

    // 修改简单类型数据 name, 使用 .value 
    const updateName = ()=>{
        name.value = '李四'
    }
    // 修改复杂类型数据
    // const data = ref(null)
    // setTimeout(()=>{
    //     data.value = res.data
    // },1000)

    return {
      name,
      age,
      updateName
    }
  },
}
</script>

<style></style>
