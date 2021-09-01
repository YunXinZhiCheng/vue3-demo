<template>
  <div class="container">
    <div>今年：{{ age }}岁</div>
    <div>后年：{{ newAge }}岁</div>
    <!-- 使用v-model绑定计算属性 -->
    <input type="text" v-model="newAge" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'App',
  setup() {
    // 1. 计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到一个新的数据
    // 今年的年龄
    const age = ref(16)

    // // 后年的年龄
    // const newAge = computed(() => {
    //   // 该函数的返回值就是计算属性的值
    //   return age.value + 2
    // })

    // 2. 计算属性高级用法: 传入一个对象
    const newAge = computed({
      // get函数，获取计算属性的值
      get() {
        return age.value + 2
      },
      // set函数，当你给计算属性设置值的时候修改
      set(value) {
        console.log(value)
        age.value = value - 2
      },
    })

    return {
      age,
      newAge,
    }
  },
}
</script>

<style></style>
