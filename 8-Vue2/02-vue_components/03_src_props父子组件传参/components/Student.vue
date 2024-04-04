<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <!-- 不要直接修改参数，可以用参数初始化data成员，再修改data成员 -->
    <button @click="myAge++">尝试修改传入的年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是中科大的学生",
      myAge:this.age
    };
  },
  // 方式一，简单声明接收
  // props:[
  //   'name','sex','age'
  // ]

  // 方式二,限制传入类型，如果传入类型不对，控制台会报错
  // props:{
  //   name:String,
  //   sex:String,
  //   age:Number
  // }

  // 方式三
  props: {
    name: {
      type: String,
      required: true, //表示这个参数是必须传入的
    },
    age: {
      type: Number,
      default: 30,   //默认值
    },
    sex: {
      type: String,
      required: true, 
    },
  },
};
</script>

<style>
</style>