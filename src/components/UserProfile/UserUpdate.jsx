export default function UserUpdate({ user, setUser }) {
  return (
    <div>
        <h2>Manage your account information below</h2>
            <form>
                <div className="account-info">
                    <h3>Login</h3>
                    <fieldset>
                        <label>Email:</label> <input type="text" value={user.email} />
                    </fieldset>
                    {/* <fieldset>
                        <label>Date of Birth:</label> <input type="Date" />
                    </fieldset> */}
                </div>
                <div className="account-delete">
                    <h3>Account</h3>
                    <button className="btn">Delete</button>
                </div>
            </form>
    </div>
  )
}
