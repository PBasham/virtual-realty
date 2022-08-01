/*========================================
        Import Dependencies
========================================*/
import { Link } from "react-router-dom"
import { logOut } from "../../utilities/users-services"
/*========================================
        Import Styling
========================================*/
import "./NavBar.css"

export default function NavBar({ user, setUser, navBarLinks, setNavBarLinks }) {

    const handleLogout = async () => {
        logOut()
        setUser(null)
    }
    return (
        <div className={`nav-bar ${navBarLinks.activeNavLink != 0 ? "background-black" : ""}`}>
            <div className={`nav-logo`}>
                <span className="text-blue">V</span>irtual<span className="text-blue">R</span>ealty
            </div>
            <div className="nav-btns">
                {navBarLinks.navLinks.map((link) => (
                    <Link
                        key={link.id}
                        to={link.to}
                        element={link.element}
                        className="nav-btn"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="nav-user-div">
                <button className="nav-user" onClick={handleLogout}>LogOut</button>
            </div>
        </div>
    )
}
