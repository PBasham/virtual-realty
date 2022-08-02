/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import * as userAPI from "../../utilities/users-api.js"
/*========================================
        Import Components
========================================*/
import UserRecentlyViewedItem from "./UserRecentlyViewedItem.jsx"

export default function UserRecentlyViewed() {

    const [recentlyViewed, setRecentlyViewed] = useState([])

    useEffect(() => {
        (async function getRecent() {
            const recentList = await userAPI.getUserRecentViewed()
            setRecentlyViewed(recentList)
        })()
        {
            console.log(recentlyViewed)
        }
    }, [])

    return (
        <div className="userprofile-recent-wrapper">
            <h2>Recently Viewed</h2>
            <div className="userprofile-recent-list">
                {recentlyViewed.map((listing, index) => (
                    <UserRecentlyViewedItem
                        key={index}
                        listing={listing}
                    />
                ))}
            </div>
        </div>
    )
}
