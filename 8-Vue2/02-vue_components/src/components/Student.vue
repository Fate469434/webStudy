<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data() {
        return {
            name:'中科大',
            address:'苏高院'
        }
    },
    }
</script>

<style>
  .school{
    background-color: pink;
  }
</style>