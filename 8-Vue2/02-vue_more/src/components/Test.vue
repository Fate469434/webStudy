<template>
  <div>
    <button @click="isShown = !isShown">显示/隐藏</button>
    <!-- appear：页面刚加载时以动画加载 -->
    <transition name="hello" :appear="true">
      <h1 v-show="isShown">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShown: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: pink;
}

.hello-enter-active {
  animation: atguigu 1s linear;
}

/* 如果transition标签没有设置name='hello',那么
上面的.hello-enter-active应改为.v-enter-active ,
下面的.hello-leave-active应改为.v-leave-active
*/

.hello-leave-active {
  animation: atguigu 1s reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateY(0px);
  }
}
</style>