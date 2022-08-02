/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
export default function ListingShowDetails({ price, baths, beds, sqft, year_build, tags }) {

    {
        // console.log(
        //     baths,
        //     beds,
        //     sqft,
        //     year_build,
        // )
    }
    const calcMonthlyPrice = (months) => {
        const monthlyPayment = (price.replace(/\,/g, '') / months).toFixed(2)
        return `$${monthlyPayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    }
    const [monthlyCalc, setMonthlyCalc] = useState("(Select a year for an estimate)")


    const handleYearChange = (e) => {
        // console.log(e.target.value)
        const months = e.target.value * 12
        setMonthlyCalc(calcMonthlyPrice(months))
    }

    return (
        <div className="listing-details-wrapper">
            <div className="listing-details-main">
                <h2>For Sale</h2>
                <h1>Price ${price}</h1>
                <h2 className="flex-hor-center">Monthly Est. Payment</h2>
                <div className="listing-detail-estimate-options">
                    <input id="radio-10" type="radio" value="10" name="years" onClick={handleYearChange} />
                    <label htmlFor="radio-10" value="10" >10yr
                    </label>
                    <input id="radio-15" type="radio" value="15" name="years" onClick={handleYearChange} />
                    <label htmlFor="radio-15" >15yr
                    </label>
                    <input id="radio-20" type="radio" value="20" name="years" onClick={handleYearChange} />
                    <label htmlFor="radio-20" >20yr
                    </label>
                    <input id="radio-25" type="radio" value="25" name="years" onClick={handleYearChange} />
                    <label htmlFor="radio-25" >25yr
                    </label>
                    <input id="radio-30" type="radio" value="30" name="years" onClick={handleYearChange} />
                    <label htmlFor="radio-30" >30yr
                    </label>
                </div>
                <h2 className="listing-detail-estimate-calc">{monthlyCalc}</h2>
            </div>
            <div className="listing-details-other">
                <ul>
                    <li>Baths: <span>{baths}</span></li>
                    <li>Beds: <span>{beds}</span></li>
                    <li>Sqft: <span>{sqft}</span></li>
                    <li>Year Build: <span>{year_build}</span></li>
                </ul>
            </div>
            <div className="listing-details-tags">
                {tags != null ?
                    tags.map(tag => (
                        <li className="listing-tag">{tag}</li>
                    ))
                    :
                    null
                }
            </div>
        </div>
    )
}
