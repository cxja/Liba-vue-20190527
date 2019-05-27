import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui';
import '../node_modules/mint-ui/lib/style.css'
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import VueRouter from '../node_modules/vue-router'
import router from './router/index.js'
import store from '../store/index.js'

import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

axios.defaults.baseURL = 'http://127.0.0.1:8081'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.prototype.$axios = axios

Vue.use(VueRouter) 
Vue.use(MintUI)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router,  //挂载
  store
})
