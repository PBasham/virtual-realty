/*========================================
        Import Dependencies
========================================*/
import { useState } from "react";
import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-services.js"

export default function LoginForm({ setUser, updateShowLogin }) {
    const [credentials, setCredentials] = useState({
        name_First: "",
        name_Last: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState('');

    const handleFormChange = () => {
        updateShowLogin()
    }

    const handleChange = (evt) => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        // setError('');
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
                <form autoComplete="off">
                    <label>First Name</label>
                    <input type="text" name="name_first" value={credentials.name_first} onChange={handleChange} required />
                    <label>Last Name</label>
                    <input type="text" name="name_last" value={credentials.name_last} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">Log In</button>
                </form>
            </div>
            <p>Not a user? <Link to="/signUp" onClick={handleFormChange}>Sign Up</Link></p>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}
