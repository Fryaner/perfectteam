import { createWebHistory, createRouter } from 'vue-router'
import AboutView from '@/components/about.vue'
import MainPage from '@/pages/main.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router