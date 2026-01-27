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
        ]
    }
}