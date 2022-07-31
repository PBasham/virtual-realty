/*========================================
        Import Dependencies
========================================*/
import { useEffect } from "react"
import PreviewListItem from "./PreviewListItem"
import SpotlightListing from "./SpotlightListing"

export default function SpotlightArea({ showHouse, listHouses }) {
    return (
        <div className="spotlight-div">
            <SpotlightListing
                showHouse={showHouse}
            />
            <div className="preview-list">
                {listHouses.map((house, index) => (
                    <PreviewListItem
                        key={index}
                        listHouse={house}
                    />
                ))}
            </div>
        </div>
    )
}
