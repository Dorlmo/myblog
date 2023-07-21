import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './config/routes.js'

const router = createRouter({
    history: createWebHistory(),
    base:import.meta.env.BASE_URL,
    routes, 
  })

const app = createApp(App)

app.use(router)

app.mount('#app')
