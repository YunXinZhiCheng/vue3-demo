<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{ money }}</p>
    <button @click="changeMoney">花50元</button>
  </div>
</template>

<script>
export default {
  name: 'Son',
  // 子组件接收父组件数据使用props属性即可
  props: {
    money: {
      type: Number,
      default: 0,
    },
  },
  //  setup函数的参数1：可以接收props属性
  //  setup函数的参数2：可以提供一定的环境
  setup(props, { emit }) {
    // 获取父组件数据money
    // 获取成功
    console.log(props.money)

    // 向父组件传值
    const changeMoney = () => {
      // 消费50元
      // 通知父组件，money需要变成50
      emit('change-money', 50)
    }

    return {
      changeMoney,
    }
  },
}
</script>

<style></style>
