/*========================================
        Import Dependencies
========================================*/
import sendRequest from "./send-request";

const BASE_URL = "/api/listings"

// get all listings
export function getAll() {
    return sendRequest(BASE_URL)
}
// show page
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}
// showpage
export function spotlightHouses() {
    return sendRequest(`${BASE_URL}/showhouses`)
}
// get matching (future planner)