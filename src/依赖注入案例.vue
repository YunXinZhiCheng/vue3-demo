<template>
  <vue class="container">
    <h1>父组件发送：{{ money }}</h1>
    <button @click="money = 1000">发钱</button>
    <hr />
    <Son2 />
  </vue>
</template>

<script>
import Son2 from './Son2.vue'
import { provide, ref } from 'vue'
export default {
  name: 'App',
  components: {
    Son2,
  },
  setup() {
    // 定义数据
    const money = ref(100)
    // 改变数据
    const changeMoney = (saleMoney) => {
      console.log('changeMoney', saleMoney)
      // 剩余多少
      money.value = money.value - saleMoney
    }
    // 将数据提供给后代组件 provide()
    provide('money', money)
    // 将函数提供给后代组件 provide()
    provide('changeMoney', changeMoney)

    return {
      money,
      changeMoney,
    }
  },
}
</script>

<style></style>
