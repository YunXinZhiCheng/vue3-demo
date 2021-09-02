<template>
  <div class="container">
    <!-- vue2.0获取单个元素 -->
    <!-- 1. 通过ref属性绑定修改元素 -->
    <!-- 2. 通过this.$refs.box获取元素 -->
    <!-- <div class="box">我是box</div> -->

    <!-- vue2.0 获取v-for遍历的多个元素 -->
    <!-- 1. 通过ref属性绑定被遍历元素 -->
    <!-- 2. 通过this.$refs.li 获取所有遍历元素 -->
    <!-- <ul>
      <li v-for="i in 4" :key="i" ref="li">{{ i }}</li>
    </ul> -->

    <!-- vue3.0 单个元素-->
    <div ref="dom">我是box</div>

    <!-- vue3.0 多个元素，被遍历的时候 -->
    <ul>
      <li v-for="i in 4" :key="i" :ref="setDom">第{{ i }}LI</li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 1.获取单个元素
    // 先定义一个空的响应式数据，ref定义的
    // setup中返回该数据，你想获取哪个DOM元素，在该元素上使用ref属性绑定该数据即可
    const dom = ref(null)
    // 打印对象
    console.log(dom)
    // 打印对象值
    onMounted(() => console.log('值为:' + dom.value))

    // 2.获取v-for遍历的元素
    // 定义一个空数组，接收所有的 LI
    const domList = []
    // 定义一个函数，往空数组添加 push DOM
    const setDom = (el) => {
      // console.log('setDom')
      console.log(el)
      domList.push(el)
    }
    // 打印接收后DOM元素后的数组
    console.log(domList)
    return {
      dom,
      setDom,
    }
  },
}
</script>

<style></style>
