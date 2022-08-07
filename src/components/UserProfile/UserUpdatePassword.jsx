import React from 'react'

export default function UserUpdatePassword({ disablePasswordBtn, tempUserData, handlePasswordUpdate, allowEdit, verifyPassword, handlePasswordChange, handlePasswordVerify,
}) {
    return (
        <>
            <form onSubmit={handlePasswordVerify}>
                <label>Current Password:
                </label>
                <input
                    disabled={!allowEdit || verifyPassword.passwordMatch}
                    type="password"
                    value={verifyPassword.currentPassword}
                    name="currentPassword"
                    onChange={handlePasswordChange}
                />
                {/* {!verifyPassword.passwordMatch ?
                    <button
                        className="btn no-margin-top-bot"
                    >Verify</button>
                    :
                    null
                } */}
            </form>
            <form onSubmit={handlePasswordUpdate}>
                <label>New Password:
                </label>
                <input
                    disabled={!verifyPassword.passwordMatch}
                    type="text"
                    value={verifyPassword.password}
                    name="password"
                    onChange={handlePasswordChange}
                />
                <label>Confirm Password:
                </label>
                <input
                    disabled={!verifyPassword.passwordMatch}
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
        </>
    )
}
