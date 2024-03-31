<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    // this.x.$on('hello',(data)=>{
    // 	console.log('我是school,我收到了student的数据：'+data);
    // })

    console.log('School',this)
    this.$bus.$on('hello',(data)=>{
    	console.log('我是School组件，收到了数据',data)
    })
  },
  beforeDestroy() {
	// 注意事件的解绑，hello是school绑定在总线傀儡上的，在school消亡时应该为其解绑
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>