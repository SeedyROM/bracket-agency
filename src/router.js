import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import What from './pages/What.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/what', component: What },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
