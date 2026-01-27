import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from './staticRoutes'
import { addPermissionRoutes } from './permission'
import { getCurrentUser } from '@/api/user'
import { isLoggedIn } from '@/utils/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
})

let isRouteReady = false

router.beforeEach(async (to, from, next) => {
  // 防止死循环跳转
  if (to.path === '/login') {
    return next()
  }

  if (!isLoggedIn()) {
    return next('/login')
  }

  if (!isRouteReady) {
    try {
      const { permissions } = await getCurrentUser()
      addPermissionRoutes(router, permissions)
      isRouteReady = true
      next({ ...to, replace: true })
    } catch (e) {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
