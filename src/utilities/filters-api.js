/*========================================
        Import Dependencies
========================================*/
import sendRequest from "./send-request";

const BASE_URL = "/api/filters"

// get all filters
export function getAll() {
    return sendRequest(BASE_URL)
}