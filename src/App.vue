<template>
  <div class="container">生命周期</div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue'

export default {
  name: 'App',
  setup() {
    // 1. DOM渲染前钩子
    onBeforeMount(() =>
      console.log('DOM渲染前钩子', document.querySelector('.container'))
    )
    // 2. DOM渲染后钩子
    onMounted(() =>
      console.log('DOM渲染后钩子1', document.querySelector('.container'))
    )
    // 3.可以定义多个相同的构造函数，以实现不同的逻辑
    onMounted(() =>
      console.log('DOM渲染后钩子2', document.querySelector('.container'))
    )
  },
}
</script>

<style></style>
