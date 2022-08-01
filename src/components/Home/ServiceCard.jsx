import React from 'react'

export default function ServiceCard({ title, img, desc }) {
    return (
        <div className="service-card">
            <div className="service-card-desc">
                <p>{desc}</p>
                <a href="/about">
                    Click To Learn More
                </a>
            </div>
            <div className="service-card-img">
                <img src={img} alt="" />
            </div>
            <h3 className="service-card-title">
                {title}
            </h3>
        </div>
    )
}
