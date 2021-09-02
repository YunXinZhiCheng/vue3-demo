<template>
  <div class="container">
    <h2>子组件接收：{{ money }}</h2>
    <hr />
    <GrandSon />
  </div>
</template>

<script>
import GrandSon from './GrandSon.vue'
// 导入inject函数
import { inject } from 'vue'
export default {
  name: 'Son2',
  components: {
    GrandSon,
  },
  setup() {
    //  接收祖先组件提供的组件 inject()
    const money = inject('money')
    return {
      money,
    }
  },
}
</script>

<style></style>
