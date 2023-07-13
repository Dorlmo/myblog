import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './config/routes.js'
import 'element-plus/dist/index.css'

const router = createRouter({
    history: createWebHistory(),
    routes, 
  })

const app = createApp(App)

app.use(router)

app.mount('#app')
