/*========================================
        Import Dependencies
========================================*/
import { getByDisplayValue } from "@testing-library/react";
import sendRequest from "./send-request";

const BASE_URL = "/api/listings"

// get all listings
export function getAll() {
    return sendRequest(BASE_URL)
}
// show page
export function getById() {
    return sendRequest(`${BASE_URL}/${id}`)
}
// get matching (future planner)