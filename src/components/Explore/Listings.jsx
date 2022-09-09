/*========================================
        Import Components
========================================*/
import Listing from "../../components/Explore/Listing.jsx"

export default function Listings({ listingsList }) {
    return (
        <div className="listing-wrapper">
            <div className="listings-list">
                {listingsList.map((listing, index) => (
                    listing.primary_photo != null ?
                        <Listing
                            key={index}
                            _id={listing._id}
                            main_photo={listing.primary_photo}
                            photos={listing.photos}
                            price={listing.list_price}
                            type={listing.description.type}
                            baths={listing.description.baths}
                            beds={listing.description.beds}
                            lot_sqft={listing.description.lot_sqft}
                            stories={listing.description.stories}
                            line={listing.location.address.line}
                            city={listing.location.address.city}
                            state={listing.location.address.state}
                        />
                        :
                        null
                ))}
            </div>
        </div>
    )
}
