/*========================================
        Import Dependencies
========================================*/
import { Link } from "react-router-dom"
import * as watchlistAPI from "../../utilities/watchlist-api.js"


export default function WatchListItem({ listing, updateList }) {

    const handleRemoveListing = async () => {
        await watchlistAPI.removeListing(listing.listingId)
        updateList()
    }
    return (
        <div className="watchlist-item">
            <Link to={`/explore/${listing.listingId}`}>
                <div className="watchlist-item-img">
                    <img src={listing.photo} alt="" />
                </div>
                <div className="watchlist-item-details">
                    <p>${listing.price}</p>
                    <p>{listing.line}</p>
                    <p>{listing.location}</p>
                </div>
            </Link>
            <button className="delete-listing-btn" onClick={handleRemoveListing}>X</button>
        </div>
    )
}
