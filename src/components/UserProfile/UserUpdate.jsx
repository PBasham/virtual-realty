/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import * as userAPI from "../../utilities/users-api.js"

export default function UserUpdate({ tempUserData, setTempUserData, allowEdit }) {
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

    /*========================================
            Functions
    ========================================*/
    const handleEmailChange = (e) => {
        setVerifyEmail({
            ...verifyEmail, [e.target.name]: e.target.value
        })
    }
    const handleEmailVerify = async () => {
        const emailMatch = await userAPI.verifyEmail(verifyEmail)
        setVerifyEmail({...verifyEmail, match: emailMatch})
        console.log("emailMatch: ", emailMatch)
    }
    const handlePasswordChange = (e) => {
        setVerifyPassword({
            ...verifyPassword, [e.target.name]: e.target.value
        })
    }
    const handlePasswordVerify = async () => {
        const passwordMatch = await userAPI.verifyPassword(verifyPassword)
        setVerifyPassword({...verifyPassword, match: passwordMatch})
        console.log("emailMatch: ", passwordMatch)
    }
    // end functions

    return (
        <div>
            <h2>Manage your account information below</h2>
            <div className="account-info">
                <h3>Login</h3>
                <fieldset className="account-info-login">
                    <label>Email:
                        <input
                            disabled={!allowEdit}
                            type="text"
                            value={verifyEmail.currentEmail}
                            name="currentEmail"
                            onChange={handleEmailChange}
                        />
                        {allowEdit ?
                            <button 
                            className="btn no-margin-top-bot"
                            onClick={handleEmailVerify}
                            >Verify</button>
                            :
                            null
                        }
                    </label>
                    {verifyEmail.emailMatch ?
                        <>
                            <label>New Email:
                                <input
                                    disabled={!allowEdit}
                                    type="text"
                                    value={verifyEmail.email}
                                    name="email"
                                    onChange={handleEmailChange}
                                />
                            </label>
                            <label>Confirm Email:
                                <input
                                    disabled={!allowEdit}
                                    type="text"
                                    value={verifyEmail.confirmEmail}
                                    name="confirmEmail"
                                    onChange={handleEmailChange}
                                />
                            </label>
                        </>
                        :
                        null

                    }
                    <h5>Change Password</h5>
                    {!allowEdit ?
                        <h6>Click "Update Account" to change password.</h6>
                        :
                        <>
                            <label>Current Password:
                                <input
                                    disabled={!allowEdit}
                                    type="text"
                                    // value={changePassword}
                                    name="currentPassword"
                                    onChange={handlePasswordChange}
                                />
                                <button 
                                className="btn no-margin-top-bot"
                                onClick={handlePasswordVerify}
                                >Verify</button>
                            </label>
                            {/* <label>New Password:
                            </label>
                            <input
                                disabled={!allowEdit}
                                type="text"
                                // value={changePassword}
                                name="password"
                                onChange={handlePasswordChange}
                            />
                            <label>Confirm Password:
                            </label>
                            <input
                                disabled={!allowEdit}
                                type="text"
                                // value={changePassword}
                                name="password"
                                onChange={handlePasswordChange}
                            /> */}
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
