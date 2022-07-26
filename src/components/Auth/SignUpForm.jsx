/*========================================
        Import Dependenies
========================================*/
import { useState } from 'react'
import { Link } from "react-router-dom"
import * as usersService from "../../utilities/users-services.js"


export default function SignUpForm({ setUser, updateShowLogin }) {
    const [credentials, setCredentials] = useState({
        name_first: "",
        name_last: "",
        email: "",
        password: "",
        confirm: "",
    });
    const [error, setError] = useState("");

    const handleChange = (evt) => {

        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError("");

    }

    const handleFormChange = () => {
        updateShowLogin()
    }
    const handleSubmit = async (evt) => {
        // This prevents form from being submitted to the server
        evt.preventDefault();
        console.log(credentials)
        try {
            const user = await usersService.signUp(credentials);
            setUser(user);
        } catch {
            setError("SignUp Failed - Please Try Again")
        }
    }

    // variable to ensure password and confirm password match.
    const disableBtn = credentials.password != credentials.confirm || credentials.password.trim() === ""
    return (
        <div className='signup-wrapper'>
            <div className="form-container" onSubmit={handleSubmit}>
                <form autoComplete="on">
                    <label>First Name</label>
                    <input type="text" name="name_first" value={credentials.name_first} onChange={handleChange} required />
                    <label>Last Name</label>
                    <input type="text" name="name_last" value={credentials.name_last} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={credentials.confirm} onChange={handleChange} required />
                    <button type="submit" disabled={disableBtn} className="btn" >Sign Up</button>
                </form>
            </div>
            <div className="form-swapper-div">
                <p className="error-message">&nbsp;{error}</p>

                <p>Already a user ?
                    <Link
                        to="/Login"
                        onClick={handleFormChange}>
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    )
}