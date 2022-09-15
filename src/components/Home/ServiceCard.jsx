import React from 'react'
import { Link } from "react-router-dom"

import AboutPage from "../../pages/AboutPage/AboutPage"

export default function ServiceCard({ title, img, desc }) {
    return (
        <div className="service-card">
            <div className="service-card-desc">
                <p>{desc}</p>
                <Link to="/about" element={<AboutPage/>}>
                    Click To Learn More
                </Link>
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
