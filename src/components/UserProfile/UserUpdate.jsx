/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import * as userAPI from "../../utilities/users-api.js"
import * as userServices from "../../utilities/users-services.js"
import UserUpdateEmail from "./UserUpdateEmail.jsx"
import UserUpdatePassword from "./UserUpdatePassword.jsx"

export default function UserUpdate({ tempUserData, setTempUserData, allowEdit, verifyEmail, setVerifyEmail, verifyPassword, setVerifyPassword, handleEmailUpdate, handlePasswordUpdate, deleteConfirm, setDeleteConfirm, setUser }) {

    const [adminAccount, setAdminAccount] = useState(tempUserData._id === "62f02dd165243188c6de6407")

    /*========================================
            Functions
    ========================================*/
    const handleEmailChange = (e) => {
        console.log(e.target.name, e.target.value)
        setVerifyEmail({
            ...verifyEmail, [e.target.name]: e.target.value
        })
    }
    const handleEmailVerify = async (e) => {
        e.preventDefault()
        console.log("verifyEmail: ", verifyEmail)
        const emailMatch = await userAPI.verifyEmail(verifyEmail)
        setVerifyEmail({ ...verifyEmail, emailMatch: emailMatch })
    }
    const disableEmailBtn = (verifyEmail.email !== verifyEmail.confirmEmail || verifyEmail.email.trim() === "") || verifyEmail.email === verifyEmail.currentEmail

    const handlePasswordVerify = async (e) => {
        e.preventDefault()
        console.log("verifyPassword: ", verifyPassword)
        const passwordMatch = await userAPI.verifyPassword(verifyPassword)
        setVerifyPassword({ ...verifyPassword, passwordMatch: passwordMatch })
    }
    const handlePasswordChange = (e) => {
        setVerifyPassword({
            ...verifyPassword, [e.target.name]: e.target.value
        })
    }
    const disablePasswordBtn = (verifyPassword.password !== verifyPassword.confirmPassword || verifyPassword.password.trim() === "" || verifyPassword.password === verifyPassword.currentPassword) || verifyPassword.password.trim().length < 3



    const handleDelete = async () => {
        if (adminAccount) {
            alert("Cannot change details of a test account.")
        } else {

            if (deleteConfirm) {
                // delete route
                console.log("Delete Account")
                const deleteAccount = await userServices.deleteUser()
                setUser(null)

            } else {
                setDeleteConfirm(true)
            }
        }
    }

    // end functions

    return (
        <div>
            <div className="account-info">
                <h3>Login</h3>
                <div className="userprofile-manage-account">
                    <UserUpdateEmail
                        adminAccount={adminAccount}
                        disableEmailBtn={disableEmailBtn}
                        tempUserData={tempUserData}
                        handleEmailUpdate={handleEmailUpdate}
                        allowEdit={allowEdit}
                        verifyEmail={verifyEmail}
                        handleEmailChange={handleEmailChange}
                    />
                    <h3>Change Password</h3>
                    <UserUpdatePassword
                        adminAccount={adminAccount}
                        handlePasswordVerify={handlePasswordVerify}
                        disablePasswordBtn={disablePasswordBtn}
                        tempUserData={tempUserData}
                        handlePasswordUpdate={handlePasswordUpdate}
                        allowEdit={allowEdit}
                        verifyPassword={verifyPassword}
                        handlePasswordChange={handlePasswordChange}
                    />
                </div>

            </div>
            <div className="account-delete-div">
                <h3>DELETE ACCOUNT</h3>
                <>
                    <button
                        className="btn no-margin-left"
                        disabled={!allowEdit}
                        onClick={handleDelete}
                    >{deleteConfirm ? "Are you sure?" : 'Delete'}</button>
                </>
            </div>
        </div>
    )
}
