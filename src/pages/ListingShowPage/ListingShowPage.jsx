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

    const [listing, setListing] = useState({})

    let objListing = {}

    useEffect(function () {
        (async function getListingById() {
            const displayListing = await ListingsApi.getById(params.id)
            console.log("Listing: ", displayListing);
            (await function setListing() {
                objListing.primary_photo = displayListing.primary_photo.href
                objListing.line = displayListing.location.address.line
                objListing.long_address = `${displayListing.location.address.city} ${displayListing.location.address.state}, ${displayListing.location.address.postal_code}`
                objListing.street_view_url = displayListing.location.street_view_url
            })()
            console.log("Listing: ", displayListing);
            console.log("ObjListing: ", objListing);
            setListing(objListing)
        })()
    }, [])


    return (
        <div className="listing-show">
            <div className="listing-show-header">
                <h2>{listing.line}</h2>
                <a href={`${listing.street_view_url}`} target="_blank">{listing.long_address}</a>
            </div>
            <div className="listing-img">
                <img src={listing.primary_photo} alt="" />
            </div>

        </div>
    )
}
