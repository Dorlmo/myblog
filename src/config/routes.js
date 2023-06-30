export default [
    { path: '/', component: ()=>import('../pages/home.vue') },
    { path: '/home', component: ()=>import('../pages/home.vue')},
    { path: '/index', component: ()=>import('../pages/treedisplay.vue')},
    { path: '/index', component: ()=>import('../pages/treedisplay.vue')},
    { path: '/list', component: ()=>import('../pages/listdisplay.vue')},
    { path: '/search', component: ()=>import('../pages/search.vue')},
    { path: '/blog/:id', component: ()=>import('../pages/blog.vue')}
]