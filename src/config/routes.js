export default [
    { path: '/', component: ()=>import('../pages/index.vue') },
    { path: '/index', component: ()=>import('../pages/index.vue')},
    { path: '/about', component: ()=>import('../pages/about.vue')}
]