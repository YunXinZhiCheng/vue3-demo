<template>
  <div class="container">
    <div>坐标</div>
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
    <hr />
    <div>{{ count }}</div>
    <button @click="add">数字累加1</button>
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive, toRefs, ref } from 'vue'
// 封装一个鼠标坐标函数
const useMouse = () => {
  // 1. 记录鼠标坐标
  // 1.1 声明一个响应式数据，是一个对象，包括x,y
  const mouse = reactive({
    x: 0,
    y: 0,
  })
  // 1.3 处理函数,修改响应式数据
  const move = (e) => {
    // console.log(e.pageX);
    // console.log(e.pageY);
    mouse.x = e.pageX
    mouse.y = e.pageY
  }
  // 1.2 等DOM渲染完毕，去监听事件
  onMounted(() => {
    document.addEventListener('mousemove', move)
  })
  // 1.4 组件销毁，删除事件
  onUnmounted(() => {
    document.removeEventListener('mousemove', move)
  })

  return mouse
}

export default {
  name: 'App',
  setup() {
    // 使用封装的鼠标坐标函数
    const mouse = useMouse()

    // 数字累加
    const count = ref(0)
    const add = () => {
      count.value++
    }
    return {
      // mouse
      ...toRefs(mouse),
      count,
      add,
    }
  },
}
</script>

<style></style>
