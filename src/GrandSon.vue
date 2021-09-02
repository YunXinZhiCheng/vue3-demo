<template>
  <h3>后代组件接收：{{ money }}</h3>
  <button @click="fn">消费20</button>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'GrandSon',
  setup() {
    const money = inject('money')
    // 后代组件：消费50，通知父组件App.vue组件，进行修改
    // 不能自己修改数据，遵循单向数据流原则，即数据谁定义就谁修改
    const changeMoney = inject('changeMoney')
    const fn = () => {
      changeMoney(20)
    }
    return {
      money,
      fn,
    }
  },
}
</script>

<style></style>
