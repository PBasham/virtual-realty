/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"

export default function UserUpdate({ tempUserData, setTempUserData, allowEdit }) {
    /*========================================
            Functions
    ========================================*/
    const handleChange = (e) => {
        setTempUserData({
            ...tempUserData, [e.target.name]: e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        console.log(e.event.name)
        // setChangePassword(...changePassword, e.target.value)
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
                                value={tempUserData.email}
                                name="email"
                                onChange={handleChange}
                            />
                        </label>
                        <h5>Change Password</h5>
                        <label>Current Password:
                            <input
                                disabled={!allowEdit}
                                type="text"
                                // value={changePassword}
                                name="password"
                                onChange={handlePasswordChange}
                            />
                        </label>
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
