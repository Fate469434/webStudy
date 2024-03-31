<template>
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生地址：{{ address }}</h2>
    <button @click="showName">点我提示学生名</button>
  </div>
</template>

<script>
  export default {
    name:'Student',
    data: function () {
      return {
        name: "李华",
        address: "苏高院",
      };
    },
    methods: {
      showName:function(){
        alert(this.name)
      }
    },
  };
</script>
