<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上面的DOM元素</button>
    <School ref='sch' id='sch' />
  </div>
</template>

<script>
  import School from './components/Student.vue'
  export default {
    name:'App',
    data() {
      return {
        msg:'欢迎学习前端'
      }
    },
    components:{School},
    methods: {
      showDOM(){
        // console.log(this.$refs.title);
        // 注意下面两种获取元素的区别
        console.log(this.$refs);
        console.log(document.querySelector('#sch'));
      }
    },
  }
</script>