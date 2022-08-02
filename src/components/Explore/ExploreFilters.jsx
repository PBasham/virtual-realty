/*========================================
        Import Dependencies
========================================*/
import { useState } from 'react'

export default function ExploreFilters({ filters,  getFilteredListings}) {

    const [formData, setFormData] = useState({
        city: null,
        county: null,
        tags: [],
    })

    const handleChange = (e) => {
        if (e.target.name === "tags") {
            // tags
            if (e.target.checked) {
                    setFormData({
                        ...formData,
                        [e.target.name]: [...formData.tags, e.target.value]
                    })
                } else {
                let tempArr = formData.tags
                let tempIndex = tempArr.indexOf(e.target.value)
                tempArr.splice(tempIndex, 1)
                setFormData({
                    ...formData,
                    [e.target.name]: [...tempArr]
                })
            }
        } else {
            // not tags
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }
        console.log(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("FormData: ", formData)
        getFilteredListings(formData)
    }
    return (
        <form onSubmit={handleSubmit} className="filter-section filters-wrapper">
            <h2>Filters</h2>
            <button className="filter-btn btn">Apply Filter</button>
            <fieldset className="filter-price-range">
                <h3>Range</h3>
                <input name="low" className="price-range" type="number" />
                -
                <input name="high" className="price-range" type="number" />
            </fieldset>
            <fieldset className="filter-section filters-city">
                <h3>City</h3>
                {filters.cities.map((city, index) => (
                    <label key={index} htmlFor={`radio-${city}`}>
                        <input onChange={handleChange} key={index} id={`radio-${city}`} name="city" type="radio" value={city} />{city}
                    </label>
                ))}
            </fieldset>
            <fieldset className="filter-section filters-county">
                <h3>County</h3>
                {filters.counties.map((county, index) => (
                    <label key={index} htmlFor={`radioTwo-${county}`}>
                        <input onChange={handleChange} key={index} id={`radioTwo-${county}`} name="county" type="radio" value={county} />{county}
                    </label>
                ))}
            </fieldset>
            <fieldset className="filter-section filters-tags">
                <h3>Tags</h3>
                {filters.tags.map((tag, index) => (
                    <label key={index} htmlFor={`checkbox-${tag}`}>
                        <input onChange={handleChange} key={index} id={`checkbox-${tag}`} name="tags" type="checkbox" value={tag} />{tag}
                    </label>
                ))}
            </fieldset>
        </form>
    )
}
