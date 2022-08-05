/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import * as userAPI from "../../utilities/users-api.js"
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

    const [allowEdit, setAllowEdit] = useState(false)

    const [tempUserData, setTempUserData] = useState(user)

    const [userSections, setUserSections] = useState({
        activeSection: 0,
    })


    const [userpageOptions, setUserpageOptions] = useState([
        "User Information",
        "Update Settings",
        "Watchlist",
        "Recently Viewed",
    ])

    const handleSectionChange = (index) => {
        setUserSections({ ...userSections, activeSection: index })
    }


    const handleEditClick = () => {
        if (allowEdit) {
            setAllowEdit(!allowEdit)
            setTempUserData(user)
        } else {
            setAllowEdit(!allowEdit)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("user: ", user)
        console.log("I'm being submitted!")
    }

    return (
        <div className="userprofile-wrapper">
            <h2>Welcome, {user.name_first}</h2>
            <div className="userprofile-content-wrapper">
                <div className="userprofile-options-wrapper">
                    <ul>
                        {userpageOptions.map((selection, index) => (
                            <li key={index} className={`${userSections.activeSection === index ? "active" : ""}`} onClick={() => handleSectionChange(index)}>{selection}</li>
                        ))}
                    </ul>
                </div>
                <div className="userprofile-content">
                    {userSections.activeSection === 0 ?
                        <UserInfo
                            tempUserData={tempUserData}
                            setTempUserData={setTempUserData}
                            allowEdit={allowEdit}
                            setAllowEdit={setAllowEdit} />
                        :
                        null}
                    {userSections.activeSection === 1 ?
                        <UserUpdate
                            tempUserData={tempUserData}
                            setTempUserData={setTempUserData}
                            allowEdit={allowEdit}
                            setAllowEdit={setAllowEdit} />
                        :
                        null}
                    {userSections.activeSection === 2 ?
                        <UserWatchList
                            tempUserData={tempUserData}
                            setTempUserData={setTempUserData}
                        />
                        :
                        null}
                    {userSections.activeSection === 3 ?
                        <UserRecentlyViewed
                            tempUserData={tempUserData}
                            setTempUserData={setTempUserData}
                        />
                        :
                        null}
                        <button
                className={`btn ${allowEdit ? "btn-cancel" : null} no-margin-left`}
                onClick={handleEditClick}>
                {allowEdit ? "Cancel update" : "Edit Profile"}
            </button>
            {allowEdit? <button className="btn no-margin-left" onClick={handleSubmit} >Save changes</button> : null}
                </div>
            </div>
        </div>
    )
}
