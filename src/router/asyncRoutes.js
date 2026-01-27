export const asyncRoutes = [
    {
        path: '/',
        component: () => import('@/layouts/MainLayout.vue'),
        redirect: '/orders/list',
        children: [
            {
                path: '/orders',
                meta: { permission: 'order.read' },
                children: [
                    {
                        path: 'list',
                        name: 'OrderList',
                        meta: { permission: 'order.read' },
                        component: () => import('@/views/orders/List.vue')
                    },
                    {
                        path: 'create',
                        name: 'OrderCreate',
                        meta: { permission: 'order.create' },
                        component: () => import('@/views/orders/Create.vue')
                    }
                ]
            }
        ]
    }
]