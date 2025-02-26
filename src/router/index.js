import { createWebHistory, createRouter } from 'vue-router'
import AboutView from '@/components/about.vue'
import HomeView from '@/components/home.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router