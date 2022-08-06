/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"

export default function UserUpdate({ tempUserData, setTempUserData, allowEdit }) {

    const [verifyPassword, setVerifyPassword] = useState({
        password: "",
        passwordMatch: false,
    })
    
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
                    {!allowEdit ?
                        <h6>Click "Update Account" to change password.</h6>
                        :
                        <>
                            <label>Current Password:
                            </label>
                                <input
                                    disabled={!allowEdit}
                                    type="text"
                                    // value={changePassword}
                                    name="password"
                                    onChange={handlePasswordChange}
                                />
                                <button className="btn">Verify</button>
                            <label>New Password:
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
                            />
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
