/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function SpotlightListing({ showHouse }) {

    return (
        <div className="preview-main">
            <Link to={`/explore/${showHouse.listingId}`}>
                <div className="preview-main-img">
                    <img src={showHouse.photo} alt="" />
                </div>
                <div className="preview-title">
                    <p>${showHouse.price}</p>
                    <p>{showHouse.line}</p>
                    <p>{showHouse.location}</p>
                </div>
            </Link>
        </div>
    )
}
