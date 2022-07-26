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
    return sendRequest(BASE_URL, "POST", newUserData)
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, "POST", credentials)
}
// get recemtly viewed list
export function getUserRecentViewed(){
    return sendRequest(`${BASE_URL}/recentlyviewed`)
}
// add to user recently viewed
export function addToRecentlyViewed(listingId){
    return sendRequest(`${BASE_URL}/recentlyviewed/${listingId}`, "PUT")
}
/*========================================
        User Update / Verification
========================================*/
export function verifyEmail(currentEmail) {
    return sendRequest(`${BASE_URL}/verify/email`, "POST", currentEmail)
}
// update user data
export function updateUserData(updatedUserData){
    return sendRequest(`${BASE_URL}/update`, "PUT", updatedUserData)
}
export function updateUserEmail(updatedEmail) {
    return sendRequest(`${BASE_URL}/update/email`, "PUT", updatedEmail)
}


export function verifyPassword(currentPassword) {
    return sendRequest(`${BASE_URL}/verify/password`, "POST", currentPassword)
}
export function updateUserPassword(updatedPassword) {
    return sendRequest(`${BASE_URL}/update/password`, "PUT", updatedPassword)
}


export function deleteUser() {
    return sendRequest(`${BASE_URL}/delete`, "DELETE")
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}