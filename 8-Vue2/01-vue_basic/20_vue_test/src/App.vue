<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// 引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  components: { School },
    name:'App',
    comments:{
        School,
        Student
    }
}
</script>

<style>

</style>