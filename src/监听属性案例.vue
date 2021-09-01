<template>
  <div class="container">
    <div>
      <p>count的值：{{ count }}</p>
      <button @click="add">数字累加</button>

      <hr />
      <div>姓名：{{ obj.name }}</div>
      <div>年龄：{{ obj.age }}</div>
      <button @click="updateName">修改数据</button>

      <hr />
      <div>品牌：{{ obj.brand.name }}</div>
      <button @click="updateBrandName">修改品牌数据</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  name: 'App',
  setup() {
    // 定义响应式数据：简单类型
    const count = ref(0)
    const add = () => {
      count.value++
    }

    // 定义响应式数据:复杂类型
    const obj = reactive({
      name: '张三',
      age: 18,
      // 深层次对象
      brand: {
        id: 1,
        name: '宝马',
      },
    })

    // 修改数据name
    const updateName = () => {
      obj.name = '李四'
    }

    // 修改数据brand里面的name
    const updateBrandName = () => {
      obj.brand.name = '奔驰'
    }

    // 当你需要监听数据的变化，就可以使用watch
    // 1. 监听一个ref数据
    // watch(count, (newVal, oldVal) => {
    //   console.log(newVal, oldVal)
    // })

    // 2. 监听一个reactive数据
    watch(obj, () => {
      console.log('数据改变了')
    })
    // 监听一个深层次对象数据的变化：使用深度监听
    watch(
      () => obj.brand,
      () => {
        console.log('brand数据改变了')
      },
      { deep: true }
    )

    // 3. 监听多个数据的变化
    // watch([count, obj], () => {
    //   console.log('监听多个数据的变化')
    // })

    // 4. 监听对象中某一个属性的变化,需要写成函数返回该属性的方式才能监听到，例如：obj.name
    // watch(
    //   () => obj.name,
    //   () => console.log('监听obj.name改变了')
    // )

    return {
      count,
      add,
      obj,
      updateName,
      updateBrandName,
    }
  },
}
</script>

<style></style>
