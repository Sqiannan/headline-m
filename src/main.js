import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { createApp } from 'vue';
import Vant from 'vant'
import 'vant/lib/index.css'

// const app = createApp()
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
