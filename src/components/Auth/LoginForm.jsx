/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-services.js"

export default function LoginForm({ setUser, updateShowLogin }) {

    const [credentials, setCredentials] = useState({
        email: "McTestuser@gmail.com",
        password: "123",
    });
    const [error, setError] = useState("");

    const handleFormChange = () => {
        updateShowLogin()
    }

    const handleChange = (evt) => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError("");
    }

    async function handleSubmit(evt) {
        // This prevents form from being submitted to the server
        evt.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError("Login Failed - Please Try Again")
        }
    }
    return (
        <div className='login-wrapper'>
            <div className="form-container" onSubmit={handleSubmit}>
                <form autoComplete="on">
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit" className="auth-btn">Log In</button>
                </form>
            </div>
            <div className="form-swapper-div">
                <p className="error-message">&nbsp;{error}</p>
                <p>Not a user? <Link to="/signUp" onClick={handleFormChange}>Sign Up</Link></p>
            </div>
        </div>
    )
}
