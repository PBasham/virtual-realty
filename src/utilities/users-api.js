/*========================================
        Import required functinos
========================================*/
// import { getToken } from "./users-services";
import sendRequest from "./send-request";

// set up base url for route
const BASE_URL = "/api/users"

/*========================================
        users-api funcitons
========================================*/
export function signUp(newUserData) {
    console.log("step 1 - signup")

    return sendRequest(BASE_URL, "POST", newUserData)
}

export function login(credentials) {
    console.log("step 1 - login")

    return sendRequest(`${BASE_URL}/login`, "POST", credentials)
}

// export function remove(credentials) {
//     return sendRequest(`${BASE_URL}/delete`, "DELETE", credentials)
// }

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}