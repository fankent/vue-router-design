import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from './staticRoutes'
import { addPermissionRoutes } from './permission'
import { isLoggedIn } from '@/utils/auth'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()

  // 防止死循环跳转
  if (to.path === '/login') {
    return next()
  }

  if (!isLoggedIn()) {
    return next('/login')
  }

  if (!auth.isLoaded) {
    try {
      await auth.loadUser()
      addPermissionRoutes(auth.permissions)
      return next({ ...to, replace: true })
    } catch (e) {
      return next('/login')
    }
  }
  next()
})

export default router
