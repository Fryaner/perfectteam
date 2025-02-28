import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router/index'
import '@/assets/styles/global.scss'  
import title from './components/title.vue'
import Accordeon from './components/accordeon.vue'

const pinia = createPinia()
const app = createApp(App)

app.component('Title', title)
app.component('Accordeon', Accordeon)

app.use(pinia)
app.use(router)
app.mount('#app')
