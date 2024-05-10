<!-- <template>
	<div>
		<slot></slot>
	</div>
</template> -->

<script>
	export default {
	name: 'Category',
	props: ['title'],
	beforeCreate() {
		console.log('1');
	},
	created() {
		console.log('2');
		console.log(this.$slots);
		console.log('3');
	},
	render() {
		console.log(this.$slots);
		return this.$slots.default[0]
	},
}
</script>

<style scoped>
.category {
	background-color: skyblue;
	width: 200px;
	height: 300px;
}

h3 {
	text-align: center;
	background-color: orange;
}

video {
	width: 100%;
}

img {
	width: 100%;
}
</style>