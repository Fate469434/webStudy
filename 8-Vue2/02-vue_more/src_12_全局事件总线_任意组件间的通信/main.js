//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

// 这样也可以,所有的组件示例都可以根据原型链找到x
const Demo=Vue.extend({})
const d=new Demo()
Vue.prototype.x=d
// console.log(Demo);
// console.log(Vue.prototype.x);

//创建vm
new Vue({
	el:'#root',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
})