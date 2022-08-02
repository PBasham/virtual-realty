/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
/*========================================
        Import Components
========================================*/
import UserInfo from "../../components/UserProfile/UserInfo"
import UserUpdate from "../../components/UserProfile/UserUpdate"
import UserWatchList from "../../components/UserProfile/UserWatchList"
import UserRecentlyViewed from "../../components/UserProfile/UserRecentlyViewed"
/*========================================
        Import Styling
========================================*/
import "./UserProfilePage.css"

export default function UserProfilePage({ navBarLinks, setNavBarLinks, user, setUser }) {
    useEffect(function () {
        setNavBarLinks({ ...navBarLinks, activeNavLink: 4 })
    }, [])

    const [userSections, setUserSections] = useState({
        activeSection: 0,
        allSections: [
            {
                id: 0,
                element: <UserInfo />,
            },
            {
                id: 1,
                element: <UserUpdate />,
            },
            {
                id: 2,
                element: <UserWatchList />,
            },
            {
                id: 3,
                element: <UserRecentlyViewed />,
            },
        ]
    })

    const [userpageOptions, setUserpageOptions] = useState([
        "User Information",
        "Update Settings",
        "Watchlist",
        "Recently Viewed",
    ])


    const handleSectionChange = (index) => {
        setUserSections({...userSections, activeSection: index})
    }
    
    return (
        <div className="userprofile-wrapper">
            <h2>Welcome, {user.name_first}</h2>
            <div className="userprofile-content-wrapper">
                <div className="userprofile-options-wrapper">
                    <ul>
                        {userpageOptions.map((selection, index) => (
                            <li key={index} onClick={() => handleSectionChange(index)}>{selection}</li>
                        ))}
                    </ul>
                </div>
                <div className="userprofile-content">
                    {userSections.allSections[userSections.activeSection].element}
                </div>
                {/* <UserInfo />
            <UserUpdate />
            <UserWatchList />
            <UserRecentlyViewed /> */}
            </div>
        </div>
    )
}
