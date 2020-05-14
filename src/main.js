import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入MintUI
import MintUI from 'mint-ui'
import "mint-ui/lib/style.min.css"
//注册MinUI组件
Vue.use(MintUI)
import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:4000'
Vue.prototype.axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
