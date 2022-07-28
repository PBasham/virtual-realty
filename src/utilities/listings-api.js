/*========================================
        Import Dependencies
========================================*/
import sendRequest from "./send-request";

const BASE_URL = "/api/listings"

// get all listings
export function getAll() {
    return sendRequest(BASE_URL)
}
// get matching (future planner)