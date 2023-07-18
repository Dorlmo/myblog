const BASE_URL = import.meta.env.BASE_URL;

export default [
    { path: BASE_URL, component: () => import('../pages/Home.vue') },
    { path: BASE_URL + 'home', name: 'home', component: () => import('../pages/Home.vue') },
    { path: BASE_URL + 'index', name: 'index', component: () => import('../pages/Index.vue') },
    { path: BASE_URL + 'about', name: 'about', component: () => import('../pages/About.vue') },
    { path: BASE_URL + 'test', name: 'test', component: () => import('../pages/Test.vue') },
    { path: BASE_URL + 'document', component: () => import('../pages/Content.vue') },
    { path: BASE_URL + 'document/:table/:blog', name: 'document', component: () => import('../pages/Content.vue') },
    { path: BASE_URL + ':pathMatch(.*)*', component: () => import('../pages/error/PageNotFound.vue') }
]