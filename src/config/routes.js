export default [
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/home', component: () => import('../pages/Home.vue') },
    { path: '/index', component: () => import('../pages/Index.vue') },
    { path: '/search', component: () => import('../pages/Search.vue') },
    { path: '/about', component: () => import('../pages/About.vue') },
    { path: '/test', component: () => import('../pages/Test.vue') },
    {
        path: '/content', component: () => import('../pages/Content.vue'),
        children: [
            { path: ':table/:blog', name: 'content', component: () => import('../components/BlogContent.vue') },
        ]
    }
]