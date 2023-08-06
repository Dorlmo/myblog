const BASE_URL = import.meta.env.BASE_URL;

export default [
    { path: BASE_URL, component: () => import('../pages/Home.vue') },
    { path: BASE_URL + 'home', name: 'home', component: () => import('../pages/Home.vue') },
    { path: BASE_URL + 'about', name: 'about', component: () => import('../pages/About.vue') },
    { path: BASE_URL + 'document/:table/:blog', component: () => import('../pages/Document.vue') },
    { path: BASE_URL + 'pagenotfound', component: () => import('../pages/error/PageNotFound.vue') },
    { path: BASE_URL + ':pathMatch(.*)*', component: () => import('../pages/error/PageNotFound.vue') }
]