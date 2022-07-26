/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
/*========================================
        Import Pages & Components
========================================*/
import LoginForm from "../../components/Auth/LoginForm.jsx"
import SignUpForm from "../../components/Auth/SignUpForm.jsx"

/*========================================
        Import Styling
========================================*/
import "./AuthPage.css"

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)

    const updateShowLogin = () => {
        setShowLogin(!showLogin)
    }
    return (
        <div className="form-wrapper">
            <h1>Welcome to <span className="text-blue">V</span>irtual<span className="text-blue">R</span>ealty</h1>
            {showLogin ?
                <LoginForm
                    setUser={setUser}
                    updateShowLogin={updateShowLogin}
                />
                :
                <SignUpForm
                    setUser={setUser}
                    updateShowLogin={updateShowLogin}
                />
            }
        </div>
    )
}
