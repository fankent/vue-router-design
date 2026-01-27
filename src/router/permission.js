import { asyncRoutes } from './asyncRoutes'
import { collectMenuNames } from '@/utils/menu'
import { filterRoutesByMenu } from '@/utils/route'

export function hasPermission(permission, permissions) {
    if (!permission) return true
    return permissions.includes(permission)
}

function filterRoutes(routes, permissions) {
    const res = []
    routes.forEach(route => {
        const p = route.meta && route.meta.permission
        if (p && !hasPermission(p, permissions)) {
            return
        }
        const r = { ...route }
        if (r.children) {
            r.children = filterRoutes(r.children, permissions)
        }
        res.push(r)
    })
    return res
}

export function addPermissionRoutes(router, permissions) {
    const allowedRoutes = filterRoutes(asyncRoutes, permissions)

    allowedRoutes.forEach(route => {
        router.addRoute(route)
    })
}

export function generateRoutesByMenus(menus) {
    const allowNames = collectMenuNames(menus)
    return filterRoutesByMenu(asyncRoutes, allowNames)
}