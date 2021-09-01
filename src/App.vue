<template>
  <div class="container">
    <div>{{ obj.name }}</div>
    <div>{{ obj.age }}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>

<script>
// 导入reactive函数
import { reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    //  定义一个对象:普通数据
    // const obj = {
    //   name: '张三',
    //   age: 18,
    // }

    // 定义一个对象：响应式数据
    const obj = reactive({
      name: '张三',
      age: 18,
    })
    // 定义一个函数：修改名字
    const updateName = () => {
      console.log('updateName')
      obj.name = '李四'
    }
    return {
      obj,
      updateName,
    }
  },
}
</script>

<style></style>
