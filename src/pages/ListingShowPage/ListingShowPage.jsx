/*========================================
        Import Dependencies
========================================*/
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as ListingsApi from "../../utilities/listings-api.js"
/*========================================
        Import Compoennts
========================================*/
import ListingShow from "../../components/Explore/ListingShow.jsx"
/*========================================
        Import Styling
========================================*/
import "./ListingShowPage.css"
export default function ListingShowPage() {

    const params = useParams()
    
    const [ listing, setListing ] = useState({})

    let objListing = {}
    
    useEffect(function() {
        (async function getListingById(){
            const displayListing = await ListingsApi.getById(params.id)
            console.log("Listing: ", displayListing);
            {displayListing.primary_photo = displayListing.primary_photo.href}
            console.log("Listing: ", displayListing);
            setListing(displayListing)
            // objListing = displayListing
            // console.log("objListing: ", objListing.primary_photo.href);
        })()
    },[])


    return (
        <div>
            <p>ListingShowPage</p>

            {/* <ListingShow listing={objListing}/> */}
                {listing.permalink}

            <div className="listing-img">
                <img src={listing.primary_photo} alt="" />
                

            </div>

        </div>
    )
}
