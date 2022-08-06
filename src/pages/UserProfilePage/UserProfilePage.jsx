/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import * as userAPI from "../../utilities/users-api.js"
import * as userServices from "../../utilities/users-services.js"
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

    const [verifyEmail, setVerifyEmail] = useState({
        currentEmail: tempUserData.email,
        email: "",
        confirmEmail: "",
        emailMatch: false,
    })
    const [verifyPassword, setVerifyPassword] = useState({
        currentPassword: "",
        password: "",
        confirmPassword: "",
        passwordMatch: false,
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

    const resetVerifies = () => {
        setVerifyEmail({
            currentEmail: tempUserData.email,
            email: "",
            confirmEmail: "",
            emailMatch: false,
        })
        setVerifyPassword({
            currentPassword: "",
            password: "",
            confirmPassword: "",
            passwordMatch: false,
        })
    }

    const handleEditClick = () => {
        if (allowEdit) {
            setAllowEdit(!allowEdit)
            setTempUserData(user)
            resetVerifies()
        } else {
            setAllowEdit(!allowEdit)
        }
    }

    const handleSubmit = async () => {
        console.log("tempUserData: ", tempUserData)
        const updateUser = userServices.updateUser(tempUserData)
        console.log("updateUser: ", updateUser)
        setUser(updateUser)
        setTempUserData(updateUser)
        setAllowEdit(false)
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
                            handleSubmit={handleSubmit}
                            verifyEmail={verifyEmail}
                            setVerifyEmail={setVerifyEmail}
                            verifyPassword={verifyPassword}
                            setVerifyPassword={setVerifyPassword}
                        />
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
                        <>
                            <button
                                className={`btn ${allowEdit ? "btn-cancel" : null} no-margin-left`}
                                onClick={handleEditClick}>
                                {allowEdit ? "Cancel update" : userSections.activeSection === 1 ? "Update Account" : "Edit Profile"}
                            </button>
                            {allowEdit && userSections.activeSection === 0 ? <button className="btn no-margin-left" onClick={handleSubmit} >Save changes</button> : null}
                        </>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}
