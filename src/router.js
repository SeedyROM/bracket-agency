import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import What from './pages/What.vue'
import NotFound from './pages/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/what', component: What },
  { path: '/404', component: NotFound },
  { path: '*', redirect: '/404' },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
