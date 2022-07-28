/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react";
/*========================================
        Import Components
========================================*/
import WatchList from "../../components/WatchList/WatchList.jsx";
/*========================================
        Import Styling
========================================*/
import "./WatchListPage.css"

export default function WatchListPage() {
    const [ userWatchlist, setUserWatchlist] = useState([])
    /*========================================
            Get the data?
    ========================================*/
    // useEffect(() => {
    //     (async function getUserWatchlist(){
    //         const userWatchlist = await watchlistApi.getWatchlist()
    //     })()
    // }, [])
    
    return (
        <div className="watchlist-page">
            WatchListPage
            <div className="watchlist-div">
                This containes all of the watchlist
                <WatchList />
                <WatchList />
            </div>
        </div>
    )
}
