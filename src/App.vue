<template>
  <div class="container">
    <!-- 使用数据和函数 -->
    <h1 @click="say">{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'App',
  // 1.组合API的起点，将来的组合API的代码，基本就在这里
  // 2.可以理解为：在beforeCreate钩子执行前执行，组件实例创建前
  // 3.函数中不能使用this，=>undefined
  // 4.模板中需要使用到的数据和函数，需要在setup中返回
  setup() {
    console.log('setup', this) // undefined
    // 数据
    const msg = 'Hello Vue3'
    // 方法
    const say = () => {
      console.log('Hello Vue3')
    }

    // 返回一个对象
    return {
      msg,
      say,
    }
  },
}
</script>
