/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react";
import * as watchlistApi from "../../utilities/watchlist-api.js"
/*========================================
        Import Components
========================================*/
import WatchList from "../../components/WatchList/WatchList.jsx";
import CreateWatchListForm from "../../components/WatchList/CreateWatchListForm/CreateWatchListForm.jsx";
/*========================================
        Import Styling
========================================*/
import "./WatchListPage.css"
import "../../components/WatchList/CreateWatchListForm/CreateWatchListForm.css"

export default function WatchListPage() {

    const [userWatchlistAll, setUserWatchlistAll] = useState([])

    const [showCreateListForm, setShowCreateListForm] = useState(false)

    /*========================================
            Get the data?
    ========================================*/
    useEffect(() => {
        (async function getUserWatchList() {
            const userWatchlist = await watchlistApi.getUserWatchList()
            setUserWatchlistAll(userWatchlist)
        })()
    }, [])

    /*========================================
            Functions
    ========================================*/
    const updateShowForm = () => {
        setShowCreateListForm(!showCreateListForm)
        console.log(showCreateListForm);
    }

    return (
        <>
            {showCreateListForm ? <CreateWatchListForm updateShowForm={updateShowForm} 
            userWatchlistAll={userWatchlistAll}
            setUserWatchlistAll={setUserWatchlistAll}/> : null}
            <div className="watchlist-page">
                <div className="watchlist-page-header">
                    <h1>Your Watchlist</h1>
                    <button className="btn" onClick={updateShowForm}>Create List</button>
                </div>
                <div className="watchlist-div">
                    {userWatchlistAll.length === 0 ?
                        <h1>You don't have a watchlist yet</h1>
                        :
                        userWatchlistAll.map((list, index) => (
                            <WatchList 
                                key={index}
                                watchlist={list}
                            />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
