import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/main.css'
import '@/assets/style/media.css'
import routers from '@/router'
const app = createApp(App)
app.use(routers)
app.mount('#app')
