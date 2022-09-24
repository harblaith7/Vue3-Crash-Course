import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Other from '../views/Other.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/other',
    name: 'Other',
    component: Other
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
