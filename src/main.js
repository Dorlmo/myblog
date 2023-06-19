import { createRouter } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './config/routes.js'
import elementplus from 'element-plus'
import 'element-plus/dist/index.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })


const app = createApp(App)

app.use(router)
app.use(elementplus)

app.mount('#app')
