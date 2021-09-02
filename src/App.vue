<template>
  <div class="container">
    <!--如果绑定事件函数 fn(e)中e就是事件对象 
        如果绑定JS表达式，此时提供一个默认的变量 $event
    -->
    <!-- <h1 @click="fn">父组件 {{ count }}</h1> -->
    <h1 @click="$event.target.style.color = 'red'">父组件 {{ count }}</h1>

    <hr />
    <!-- 如果你想获取自定义事件,
    如果绑定事件函数， fn fn(data){ // data触发自定义事件的传参}
    如果绑定Js表达式， 此时$event代表触发自定义事件的传参 -->
    <!-- <Son3 :modelValue="count" @update:modelValue="count = $event" /> -->
    <Son3 v-model="count" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Son3 from './Son3.vue'
export default {
  name: 'App',
  components: {
    Son3,
  },
  setup() {
    const count = ref(10)
    return {
      count,
    }
  },
}
</script>

<style></style>
