export default [
    { path: '/', component: () => import('../pages/home.vue') },
    { path: '/home', component: () => import('../pages/home.vue') },
    { path: '/index', component: () => import('../pages/index.vue') },
    { path: '/list', component: () => import('../pages/listdisplay.vue') },
    { path: '/search', component: () => import('../pages/search.vue') },
    { path: '/about', component: () => import('../pages/about.vue') },
    { path: '/content/:index+', component: () => import('../components/blogcontent.vue') }
]