/*========================================
        Import Dependencies
========================================*/
import { Link } from "react-router-dom"

export default function UserRecentlyViewedItem({ listing }) {
    return (
        <Link to={`/explore/${listing.listingId}`}>
            <div className="userprofile-recent-listing">
                <img src={listing.img} alt="" />
                <div className="userprofile-recent-details">
                    <h3>{listing.line}</h3>
                </div>
            </div>
        </Link>
    )
}
