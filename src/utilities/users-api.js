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
// update user data
export function updateUserData(updatedUserData){
    return sendRequest(`${BASE_URL}/update`, "PUT", updatedUserData)
}


// export function remove(credentials) {
//     return sendRequest(`${BASE_URL}/delete`, "DELETE", credentials)
// }

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}