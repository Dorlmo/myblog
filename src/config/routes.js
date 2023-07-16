export default [
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/home', component: () => import('../pages/Home.vue') },
    { path: '/index', component: () => import('../pages/Index.vue') },
    { path: '/about', component: () => import('../pages/About.vue') },
    { path: '/test', component: () => import('../pages/Test.vue') },
    { path: '/content', component: () => import('../pages/Content.vue') },
    { path: '/content/:table/:blog', name: 'content', component: () => import('../pages/Content.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('../pages/error/PageNotFound.vue') }
]