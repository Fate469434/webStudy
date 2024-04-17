<template>
  <div>
    <!-- 报错 -->
    <Student name='王五' sex='人妖' :age='age' />
    {{ age }}
    <!-- 加冒号就是传整数不会报错 -->
    <Student name='张三' sex='男' :age='18' />

    <hr>
    
    <!-- v-bind会对表达式进行计算 -->
    <Student name='李四' sex='女' :age='18+1' />
  </div>
</template>

<script>
  import Student from './components/Student.vue'
  export default {
    name:'App',
    components:{Student},
    data() {
      return {
        age:18
      }
    },
  }
</script>