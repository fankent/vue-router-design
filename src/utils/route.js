export function filterRoutesByMenu(routes, allowNames) {
    const res = []

    routes.forEach(route => {
        if (allowNames.includes(route.name)) {
            const r = { ...route }

            if (r.children) {
                r.children = filterRoutesByMenu(r.children, allowNames)
            }

            res.push(r)
        }
    })

    return res
}
