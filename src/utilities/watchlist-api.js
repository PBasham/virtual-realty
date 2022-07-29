/*========================================
        Import Dependencies
========================================*/
import { base } from "../../models/user";
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