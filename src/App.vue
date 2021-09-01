<template>
  <div class="container">
    {{ name }}
    <br />
    <button @click="updateName">修改数据</button>
  </div>
</template>

<script>
import { reactive, toRef } from 'vue'
export default {
  name: 'App',
  setup() {
    // 1. 响应式数据对象
    const obj = reactive({
      name: '张三',
      age: 10,
    })
    // 2. 模板中只需要使用name数据
    // 注意：从响应式对象中解构出来的属性数据，不再是响应式数据, 出来的是一个普通数据
    // const { name } = obj

    const name = toRef(obj, 'name')
    console.log(name)

    // 3. 修改name数据: 属性.value
    const updateName = () => {
      console.log('updateName')
      // toRef转换响应式数据包装成对象，value存放值的位置
      name.value = '李四'
    }
    return {
      name,
      updateName,
    }
  },
}
</script>

<style></style>
