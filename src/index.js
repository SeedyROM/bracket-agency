import axios from 'axios'
import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import Buefy from 'buefy'

import App from './components/App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Buefy)

const unsync = sync(store, router)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
})

unsync()
