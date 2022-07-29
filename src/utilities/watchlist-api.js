/*========================================
        Import Dependencies
========================================*/
import sendRequest from "./send-request";

const BASE_URL = "/api/watchlist"
// index route
export function getUserWatchList() {
    return sendRequest(BASE_URL)
}

// show route
export function getWatchListById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

// create
export function createList(listName) {
    return sendRequest(`${BASE_URL}/create`, "POST", listName)
}