import React from 'react'

export default function ListingShowPhotos({primary_photo, photos}) {
  return (
    <div className="listing-photos-wrapper">
        <div className="listing-photos">
            <img src={primary_photo} alt="" />
        </div>
    </div>
  )
}
