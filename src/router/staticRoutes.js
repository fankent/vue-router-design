export const staticRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/403',
        name: 'Forbidden',
        component: () => import('@/views/403.vue')
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('@/views/404.vue')
    }
]