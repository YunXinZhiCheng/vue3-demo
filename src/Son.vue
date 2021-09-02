<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{ money }}</p>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'Son',
  // 子组件接收父组件数据使用props属性即可
  props: {
    money: {
      type: Number,
      default: 0,
    },
  },
  //  setup函数的参数可以接收props属性
  setup(props) {
    // 获取父组件数据money
    // 获取成功
    console.log(props.money)
  },
}
</script>

<style></style>
