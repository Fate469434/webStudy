<template>
	<div class="container">
		<Category title="游戏" >
			<!-- <School slot="a"></School> -->
			<School></School>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	import School from './components/School.vue'
	export default {
		name:'App',
		components:{Category,School},
		data() {
			return {
				foods:['火锅','烧烤','小龙虾','牛排'],
				games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
				films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
			}
		},
	}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>
