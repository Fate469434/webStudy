<template>
  <div>
    <School/>
    <hr>
    <Student/>
  </div>  
</template>

<script>
  import School from './components/School.vue'
  export default {
    name:'App',
    components:{School},
  }
</script>