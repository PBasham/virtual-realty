/*========================================
        Import Dependencies
========================================*/
import { Link } from "react-router-dom"

export default function PreviewListItem({listHouse}) {
    return (
        <div className="preview-list-item">
            <Link to={`/explore/${listHouse.listingId}`}>
                <div className="preview-list-img">
                    <img src={listHouse.photo} alt="" />
                </div>
                <div className="preview-list-details">
                    <p>${listHouse.price}</p>
                    <p>{listHouse.line}</p>
                    <p>{listHouse.location}</p>
                </div>
            </Link>
        </div>
    )
}
