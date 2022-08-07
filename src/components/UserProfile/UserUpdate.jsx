/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import * as userAPI from "../../utilities/users-api.js"
import UserUpdateEmail from "./UserUpdateEmail.jsx"
import UserUpdatePassword from "./UserUpdatePassword.jsx"

export default function UserUpdate({ tempUserData, setTempUserData, allowEdit, verifyEmail, setVerifyEmail, verifyPassword, setVerifyPassword, handleEmailUpdate, handlePasswordUpdate }) {

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
    // end functions

    return (
        <div>
            <div className="account-info">
                <h3>Login</h3>
                <div className="userprofile-manage-account">
                    <UserUpdateEmail
                        disableEmailBtn={disableEmailBtn}
                        tempUserData={tempUserData}
                        handleEmailUpdate={handleEmailUpdate}
                        allowEdit={allowEdit}
                        verifyEmail={verifyEmail}
                        handleEmailChange={handleEmailChange}
                    />
                    <h3>Change Password</h3>
                    <UserUpdatePassword
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
                {allowEdit ?
                    <>
                        <h3>DELETE ACCOUNT</h3>
                        <button className="btn no-margin-left" >Delete</button>
                    </>
                    : null}
            </div>
        </div>
    )
}
