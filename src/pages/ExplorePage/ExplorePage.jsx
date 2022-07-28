/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import * as ListingsApi from "../../utilities/listings-api.js"
/*========================================
        Import Components
========================================*/
import Listings from "../../components/Explore/Listings.jsx"
/*========================================
        Import Styling
========================================*/
import "./ExplorePage.css"

export default function ExplorePage() {
    const [listingsList, setListingsList] = useState([])

    useEffect(function() {
        (async function getListings(){
            const displayListings = await ListingsApi.getAll()
            setListingsList(displayListings)
            console.log("Listings: ",displayListings);
        })()
    },[])
    
    return (
        <div className="explore-page">
            ExplorePage
            <div className="listings-list">
                <Listings />
            </div>
        </div>
    )
}
