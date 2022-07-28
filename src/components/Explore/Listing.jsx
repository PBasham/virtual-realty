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
        <div className="listing-preview">
            <img src={main_photo.href} alt=""
            />
            <div className="listing-preview-detail">

                {_id}
            </div>
        </div>
    )
}
