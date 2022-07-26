/*========================================
        Import required functins
========================================*/
import { getToken } from "./users-services";

export default async function sendRequest(url, method = "GET", payload = null) {
    const options = { method }

    if (payload)  {
        options.header = { "Content-Type": "application/json"}
        options.body = JSON.stringify(payload)
    }
    const token = getToken()

    if (token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
    }
    const res = await fetch(url, options)

    console.log(`Responded with ${res} from fetch at: ${url}. Mehtod: ${method}.`)

    if (res.ok) return res.json()
    throw new Error("Bad Request")
}