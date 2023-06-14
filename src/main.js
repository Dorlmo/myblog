import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './config/routes.js'

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })


const app = createApp(App)

app.use(router)

app.mount('#app')
