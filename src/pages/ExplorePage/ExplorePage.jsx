/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import * as ListingsApi from "../../utilities/listings-api.js"
/*========================================
        Import Components
========================================*/
import Listings from "../../components/Explore/Listings.jsx"
import ExploreFilters from "../../components/Explore/ExploreFilters.jsx"
/*========================================
        Import Styling
========================================*/
import "./ExplorePage.css"

export default function ExplorePage({navBarLinks, setNavBarLinks}) {
    const [listingsList, setListingsList] = useState([])

    useEffect(function() {
        (async function getListings(){
            const displayListings = await ListingsApi.getAll()
            setListingsList(displayListings)
            // console.log("Listings: ", displayListings);
        })()
        setNavBarLinks({...navBarLinks, activeNavLink: 1})
    },[])
    
    return (
        <div className="explore-page">
            <h1>Take a scroll through our beautiful homes</h1>
            <div className="explore-page-content">
                <ExploreFilters />
                <Listings listingsList={listingsList}/>
            </div>
        </div>
    )
}
