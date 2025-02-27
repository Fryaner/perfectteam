import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router/index'
import '@/assets/styles/global.scss'  
import title from './components/title.vue'

const pinia = createPinia()
const app = createApp(App)

app.component('Title', title)

app.use(pinia)
app.use(router)
app.mount('#app')
