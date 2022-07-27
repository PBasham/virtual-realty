import React from 'react'

export default function ServiceCard({ title, img, desc }) {
    return (
        <div className="service-cards-item">
            <div className="service-card-img">
                <img src={img} alt="" />
            </div>
            <div className="service-card-desc">
                <p>{desc}</p>
            </div>
            <h3 className="service-card-title">
                {title}
            </h3>
        </div>
    )
}
