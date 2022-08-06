/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import * as userAPI from "../../utilities/users-api.js"

export default function UserUpdate({ tempUserData, setTempUserData, allowEdit, verifyEmail, setVerifyEmail, verifyPassword, setVerifyPassword, handleEmailUpdate, handlePasswordUpdate}) {

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
    
    const handlePasswordChange = (e) => {
        console.log("verifyPassword: ", verifyPassword)
        setVerifyPassword({
            ...verifyPassword, [e.target.name]: e.target.value
        })
    }
    const handlePasswordVerify = async (e) => {
        e.preventDefault()
        console.log("verifyPassword: ", verifyPassword)
        const passwordMatch = await userAPI.verifyPassword(verifyPassword)
        setVerifyPassword({ ...verifyPassword, passwordMatch: passwordMatch })
    }
    const disablePasswordBtn = (verifyPassword.password !== verifyPassword.confirmPassword || verifyPassword.password.trim() === "" || verifyPassword.password === verifyPassword.currentPassword) || verifyPassword.password.trim().length < 3
    // end functions

    return (
        <div>
            <h2>Manage your account information below</h2>
            <div className="account-info">
                <h3>Login</h3>
                <fieldset className="account-info-login">
                    <form onSubmit={handleEmailVerify}>
                        <label>Email:
                            <input
                                disabled={!allowEdit || verifyEmail.emailMatch}
                                type="text"
                                value={verifyEmail.currentEmail}
                                name="currentEmail"
                                onChange={handleEmailChange}
                            />
                            {allowEdit && !verifyEmail.emailMatch ?
                                <button
                                    className="btn no-margin-top-bot"
                                >Verify</button>
                                :
                                null
                            }
                        </label>
                    </form>
                    {verifyEmail.emailMatch ?
                        <form onSubmit={handleEmailUpdate}>
                            <label>New Email:
                            </label>
                            <input
                                disabled={!allowEdit}
                                type="email"
                                value={verifyEmail.email}
                                name="email"
                                onChange={handleEmailChange}
                            />
                            <label>Confirm Email:
                            </label>
                            <input
                                disabled={!allowEdit}
                                type="email"
                                value={verifyEmail.confirmEmail}
                                name="confirmEmail"
                                onChange={handleEmailChange}
                            />
                            <button
                                className="btn no-margin-left"
                                disabled={disableEmailBtn}
                            >Update</button>
                        </form>
                        :
                        null

                    }
                    <h5>Change Password</h5>
                    {!allowEdit ?
                        <h6>Click "Update Account" to change password.</h6>
                        :
                        <>
                            <form onSubmit={handlePasswordVerify}>
                                <label>Current Password:
                                    <input
                                        disabled={!allowEdit || verifyPassword.passwordMatch}
                                        type="password"
                                        value={verifyPassword.currentPassword}
                                        name="currentPassword"
                                        onChange={handlePasswordChange}
                                    />
                                    {!verifyPassword.passwordMatch ?
                                        <button
                                            className="btn no-margin-top-bot"
                                        >Verify</button>
                                        :
                                        null
                                    }
                                </label>
                            </form>
                            {verifyPassword.passwordMatch ?
                                <form onSubmit={handlePasswordUpdate}>
                                    <label>New Password:
                                    </label>
                                    <input
                                        disabled={!allowEdit}
                                        type="text"
                                        value={verifyPassword.password}
                                        name="password"
                                        onChange={handlePasswordChange}
                                    />
                                    <label>Confirm Password:
                                    </label>
                                    <input
                                        disabled={!allowEdit}
                                        type="text"
                                        value={verifyPassword.confirmPassword}
                                        name="confirmPassword"
                                        onChange={handlePasswordChange}
                                    />
                                    <p className="text-italic text-small">password must be at least 3 characters long</p>
                                    <button
                                        className="btn no-margin-left"
                                        disabled={disablePasswordBtn}
                                    >Update</button>

                                </form>
                                :
                                null
                            }
                        </>
                    }
                </fieldset>

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
