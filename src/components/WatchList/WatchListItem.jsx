/*========================================
        Import Dependencies
========================================*/
import { Link } from "react-router-dom"


export default function WatchListItem({ listing }) {
    return (
        <Link to={`/explore/${listing.listingId}`}>
            <div className="watchlist-item">
                <div className="watchlist-item-img">
                    <img src={listing.photo} alt="" />
                </div>
                <div className="watchlist-item-details">
                    <p>${listing.price}</p>
                    <p>{listing.line}</p>
                    <p>{listing.location}</p>
                </div>
            </div>
        </Link>
    )
}
