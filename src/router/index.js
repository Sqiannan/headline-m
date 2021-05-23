import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
