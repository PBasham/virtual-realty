import React from 'react'

export default function ListingShowDetails() {
    const handleYearChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="listing-details-wrapper">
            <div className="listing-details-main">
                <h2>For Sale</h2>
                <h1>Price</h1>
                <div className="listing-detail-estimate-options">
                    <input id="radio-10" type="radio" value="10" name="years" onClick={handleYearChange} />
                    <label htmlFor="radio-10" value="10" >10
                    </label>
                    <input id="radio-15" type="radio" value="15" name="years" onClick={handleYearChange} />
                    <label htmlFor="radio-15" >15
                    </label>
                    <input id="radio-20" type="radio" value="20" name="years" onClick={handleYearChange} />
                    <label htmlFor="radio-20" >20
                    </label>
                    <input id="radio-25" type="radio" value="25" name="years" onClick={handleYearChange} />
                    <label htmlFor="radio-25" >25
                    </label>
                    <input id="radio-30" type="radio" value="30" name="years" onClick={handleYearChange}/>
                    <label htmlFor="radio-30" >30
                    </label>
                </div>
            </div>
            <div className="listing-details-other">1</div>
            <div className="listing-details-tags">1</div>
        </div>
    )
}
