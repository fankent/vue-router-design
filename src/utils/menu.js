export function collectMenuNames(menus, result = []) {
    menus.forEach(menu => {
        if (menu.name) {
            result.push(menu.name)
        }
        if (menu.children && menu.children.length) {
            collectMenuNames(menu.children, result)
        }
    })
    return result
}
