// stores/menu.js
import { defineStore } from 'pinia'
import { asyncRoutes } from '@/router/asyncRoutes'

export const useMenuStore = defineStore('menu', {
    state: () => ({
        menus: [],        // 后端返回
        menuRoutes: []    // 计算结果
    }),

    actions: {
        setMenus(menus) {
            this.menus = menus
            this.menuRoutes = this.computeMenuRoutes()
        },

        computeMenuRoutes() {
            const filter = (routes) => {
                return routes
                    .filter(r => this.menus.includes(r.name) && !r.meta?.hidden)
                    .map(r => ({
                        ...r,
                        children: r.children ? filter(r.children) : []
                    }))
            }

            return filter(asyncRoutes)
        }
    }
})
