export default [
    { path: '/', component: ()=>import('../pages/home.vue') },
    { path: '/home', component: ()=>import('../pages/home.vue')},
    { path: '/index', component: ()=>import('../pages/index.vue')},
    { path: '/about', component: ()=>import('../pages/about.vue')},
    { path: '/tags', component: ()=>import('../pages/tags.vue')},
    { path: '/search', component: ()=>import('../pages/search.vue')},
]