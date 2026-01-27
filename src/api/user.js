export function getCurrentUser() {

    // request api/me
    return {
        "user": {
            "id": 1,
            "name": "Tom",
            "avatar": ""
        },
        "permissions": [
            "order.read",
            "order.create"
        ],
        // 菜单由后端计算并返回，并通过name进行过滤和匹配
        "menus": [
            {
                "name": "OrderList",
                "title": "订单列表",
                "permission": "order.read"
            }
        ]
    }
}