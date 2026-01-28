import { defineStore } from 'pinia'
import { getCurrentUser } from '@/api/user'
import { useMenuStore } from './menu'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        permissions: [],
        menus: [],
        isLoaded: false
    }),

    actions: {
        async loadUser() {
            const res = await getCurrentUser()
            this.user = res.user
            this.permissions = res.permissions
            this.menus = res.menus
            this.isLoaded = true

            const menuStore = useMenuStore()
            menuStore.setMenus(res.menus)
        },
        reset() {
            this.$reset()
        }
    }
})
