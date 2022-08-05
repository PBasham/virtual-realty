export default function UserUpdate({ tempUserData, setTempUserData, allowEdit }) {

    /*========================================
            Functions
    ========================================*/
    const handleChange = (e) => {
        setTempUserData({
            ...tempUserData, [e.target.name]: e.target.value
        })
    }
    // end functions

    return (
        <div>
            <h2>Manage your account information below</h2>
            <form>
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

                    </fieldset>
                </div>
            </form>
            <h3>Account</h3>
            <div className="account-delete-div">
                {allowEdit ? <button className="btn no-margin-left" >Delete</button> : null}
            </div>
        </div>
    )
}
