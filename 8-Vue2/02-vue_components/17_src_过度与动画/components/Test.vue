<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- 
		transition 标签：Vue 内置的动画标签
		作用：在 [插入] / [更新] / [移除] DOM 元素时，在合适的时候给元素添加样式类名（配合 CSS 样式使用，实现动画效果） 
		-->

		<!-- appear是让网页第一次出现的时候有动画效果 -->
		<transition name="hello" :appear="true">
			<!-- <h1 v-show="isShow">你好啊！</h1> -->
			<span v-show="isShow"></span>
		</transition>

	</div>
</template>

<script>
	export default {
		name:'Test',
		data() {
			return {
				isShow:true
			}
		},
	}
</script>



<style scoped>
	h1{
		background-color: orange;
	}
	span{
		display: block;
		width: 100px;
		height: 100px;
		background-color: orange;
	}

	.hello-enter-active{
		animation: atguigu 0.5s linear;
	}

	.hello-leave-active{
		animation: atguigu 0.5s linear reverse;
	}

	@keyframes atguigu {
		from{
			/* transform: translateX(-100%); */
			width: 100px;
			height: 100px;
		}
		to{
			/* transform: translateX(0px); */
			width: 200px;
			height: 200px;
		}
	}
</style>