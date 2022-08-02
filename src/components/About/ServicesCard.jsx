import React from 'react'

export default function ServicesCard({ service }) {
    return (
        <div className="service-list-card">
            <h4>{service.name}</h4>
            <div className="service-card-detail">
                <div className="service-card-detail-img">
                    <img src={service.img} alt="" />
                </div>
                <p>{service.description}</p>
                <p>Inquire Now</p>
            </div>
        </div>
    )
}
