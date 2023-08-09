export default [
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/home', name: 'home', component: () => import('../pages/Home.vue') },
    { path: '/about', name: 'about', component: () => import('../pages/About.vue') },
    { path: '/document/:table/:blog', component: () => import('../pages/Document.vue') },
    { path: '/pagenotfound', component: () => import('../pages/error/PageNotFound.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('../pages/error/PageNotFound.vue') }
]