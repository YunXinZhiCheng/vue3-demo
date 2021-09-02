<template>
  <div class="container">
    <h1>父组件</h1>
    <p>{{ money }}</p>
    <hr />
    <!-- 子组件
     子传父：绑定自定义事件
     -->
    <Son :money="money" @change-money="updateMoney" />
  </div>
</template>

<script>
import Son from './Son.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    Son,
  },
  // 父组件的数据传递给子组件
  // 子组件的数据传递给父组件
  setup() {
    const money = ref(100)

    const updateMoney = (newMoney) => {
      console.log(newMoney)
      money.value = newMoney
    }
    return {
      money,
      updateMoney,
    }
  },
}
</script>

<style></style>
