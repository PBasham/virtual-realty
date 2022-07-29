/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react";
import * as watchlistApi from "../../utilities/watchlist-api.js"
/*========================================
        Import Components
========================================*/
import WatchList from "../../components/WatchList/WatchList.jsx";
/*========================================
        Import Styling
========================================*/
import "./WatchListPage.css"

export default function WatchListPage() {
    const [userWatchlistAll, setUserWatchlistAll] = useState([])
    /*========================================
            Get the data?
    ========================================*/
    useEffect(() => {
        (async function getUserWatchList() {
            const userWatchlist = await watchlistApi.getUserWatchList()
            setUserWatchlistAll(userWatchlist)
        })()
    }, [])

    return (
        <div className="watchlist-page">
            <div className="watchlist-page-header">
                <h1>Your Watchlist</h1>
                <button className="btn">Create List</button>
            </div>
            <div className="watchlist-div">
                {userWatchlistAll.length === 0 ?
                    <h1>You don't have a watchlist yet</h1>
                    :
                    <WatchList />
                }

            </div>
        </div>
    )
}
