/*========================================
        Import Dependencies
========================================*/
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import * as ListingsApi from "../../utilities/listings-api.js"

export default function ListingShowPage() {

    const params = useParams()
    
    useEffect(function() {
        // (async function getListingById(){
        //     const displayListing = await ListingsApi.getById(params.id)
        //     // setListingsList(displayListings)
        //     console.log("Listign: ", displayListing);
        // })()
    },[])


    return (
        <div>
            <p>ListingShowPage</p>
            <p>id: {params.id}</p>

        </div>
    )
}
