import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import '@/assets/styles/global.scss'  
import title from './components/title.vue'
import Accordeon from './components/accordeon.vue'
import Arrow from './assets/icons/arrow.vue'
import Form from './components/form.vue'

const pinia = createPinia()
const app = createApp(App)

app.component('Modal', Form)
app.component('Title', title)
app.component('Accordeon', Accordeon)
app.component('ArrowTop', Arrow)

app.use(pinia)
app.mount('#app')
