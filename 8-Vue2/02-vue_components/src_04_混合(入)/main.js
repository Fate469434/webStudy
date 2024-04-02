import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 给所有的vm和vc挂载混合，全局挂载
// Vue.mixin(hunhe)

new Vue({
  render: h => h(App),
}).$mount('#app')
