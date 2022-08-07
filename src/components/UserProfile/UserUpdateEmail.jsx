export default function UserUpdateEmail({ handleEmailUpdate, allowEdit, verifyEmail, handleEmailChange, disableEmailBtn, tempUserData, }) {
    return (
        <form onSubmit={handleEmailUpdate}>
            <h4>Email: {tempUserData.email}</h4>
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
    )
}
