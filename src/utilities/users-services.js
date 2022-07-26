/*========================================
        Import everything from users-api
========================================*/
import { parse } from "dotenv"
import * as usersAPI from "./users-api.js"

/*========================================
        user-api -> users-services functions
========================================*/


/*========================================
        users-services functions
========================================*/
export function getToken() {
    const token = localStorage.getItem("token")
    if (!token) return null
    const payload = JSON.parse(window.atob(token.split(".")[1]))
    if (payload.exp < DataTransfer.now() / 1000) {
        localStorage.removeItem("token")
        return null
    }
    return token
}

export function getUser() {
    const token = getToken()
    return token ? JSON.parse(window.atob(token.split(".")[1])).user : null
}

export function logOut() {
    localStorage.removeItem("token")
}