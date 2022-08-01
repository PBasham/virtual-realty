/*========================================
        Import Dependencies
========================================*/
import { useState } from 'react'

export default function ExploreFilters() {
    const [,] = useState({})
    return (
        <div className="filters-wrapper">
            <h2>Filters</h2>
                <button className="filter-btn btn">Apply Filter</button>
                <div className="filter-price-range">
                    <h3>Range</h3>
                    <input name="low" className="price-range" type="number" />
                    -
                    <input name="high" className="price-range" type="number" />
                </div>
                <div className="filters-city">
                    <h3>City</h3>
                </div>
                <div className="filters-county">
                    <h3>County</h3>

                </div>
                <div className="filters-tags">
                    <h3>Tags</h3>
                </div>
        </div>
    )
}
