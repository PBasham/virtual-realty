/*========================================
        Import Dependencies
========================================*/
import { Link } from "react-router-dom"

export default function Listing({
    _id,
    main_photo,
    photos,
    price,
    type,
    baths,
    beds,
    lot_sqft,
    stories,
    line,
    city,
    state,
}) {
    return (
        <a href={`/explore/listings/${_id}`}>

            <div className="listing-preview">
                <img src={main_photo.href} alt=""
                />
                <div className="listing-preview-detail">

                    <p>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p>{line}</p>
                    <p>{`${city} ${state}`}</p>
                </div>
            </div>
        </a>
    )
}
