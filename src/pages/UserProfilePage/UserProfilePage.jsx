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

    const [changePassword, setChangePassword] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    })

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
        if (allowEdit) handleEditClick()
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

    const handleSubmit = async () => {
        const updateUser = await userAPI.updateUserData(tempUserData)
        console.log("updateUser: ", updateUser)
        setUser(updateUser)
        setTempUserData(updateUser)
        setAllowEdit(false)
    }


    return (
        <div className="userprofile-wrapper">
            {console.log(user)}
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
                            setAllowEdit={setAllowEdit}
                            handleSubmit={handleSubmit} />
                        :
                        null}
                    {userSections.activeSection === 1 ?
                        <UserUpdate
                            tempUserData={tempUserData}
                            setTempUserData={setTempUserData}
                            allowEdit={allowEdit}
                            setAllowEdit={setAllowEdit}
                            handleSubmit={handleSubmit} />
                        :
                        null}
                    {userSections.activeSection === 2 ?
                        <UserWatchList
                            user={user}
                            setUser={setUser}
                        />
                        :
                        null}
                    {userSections.activeSection === 3 ?
                        <UserRecentlyViewed
                            user={user}
                            setUser={setUser}
                        />
                        :
                        null}
                    {userSections.activeSection === 0 || userSections.activeSection === 1 ?
                        <button
                            className={`btn ${allowEdit ? "btn-cancel" : null} no-margin-left`}
                            onClick={handleEditClick}>
                            {allowEdit ? "Cancel update" : userSections.activeSection === 1 ? "Update Account" : "Edit Profile"}
                        </button>
                        :
                        null
                    }
                    {allowEdit ? <button className="btn no-margin-left" onClick={handleSubmit} >Save changes</button> : null}
                </div>
            </div>
        </div>
    )
}
