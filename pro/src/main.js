import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './api/http'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.prototype.$api = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
