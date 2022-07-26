import React from 'react'

export default function UserUpdatePassword({ disablePasswordBtn, tempUserData, handlePasswordUpdate, allowEdit, verifyPassword, handlePasswordChange, handlePasswordVerify, adminAccount, }) {
    return (
        <>
            <form className="update-settings" onSubmit={handlePasswordVerify}>
                <fieldset>
                    Current Password:
                    <div>

                        <input
                            disabled={adminAccount ? true : !allowEdit}
                            type="password"
                            value={adminAccount ? "Cannot Edit Test User" : verifyPassword.currentPassword}
                            name="currentPassword"
                            onChange={handlePasswordChange}
                        />
                        <button className="btn no-margin-top-bot">Check</button>
                    </div>
                </fieldset>
            </form>
            <form onSubmit={handlePasswordUpdate}>
                <fieldset>
                    <label>New Password:
                    </label>
                    <input
                        disabled={adminAccount ? true : !verifyPassword.passwordMatch}
                        type="text"
                        value={verifyPassword.password}
                        name="password"
                        onChange={handlePasswordChange}
                    />
                    <label>Confirm Password:
                    </label>
                    <input
                        disabled={adminAccount ? true : !verifyPassword.passwordMatch}
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
                </fieldset>
            </form>
        </>
    )
}
