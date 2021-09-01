<template>
  <div class="container">
    <div>名字：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <button @click="updateName">修改数据</button>
  </div>
</template>

<script>
import { reactive,  toRefs } from 'vue'
export default {
  name: 'App',
  setup() {
    // 1. 响应式数据对象
    const obj = reactive({
      name: '张三',
      age: 10,
    })
    console.log(obj)

    // 2. 解构或者展开响应式数据对象
    // const { name, age } = obj
    // console.log(name,age);

    // const obj2 = { ...obj }
    // console.log(obj2);
    // 以上方式导致数据不是响应式数据

    // 使用toRefs函数,是响应式数据
    const obj3 = toRefs(obj)
    console.log(obj3)

    // 定义一个函数，修改数据 name
    const updateName = () => {
      obj3.name.value = '李四'
      // obj3.age.value = 18
    }
    return {
      ...obj3,
      updateName,
    }
  },
}
</script>

<style></style>
