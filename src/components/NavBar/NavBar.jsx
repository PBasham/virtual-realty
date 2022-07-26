/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import { Link } from "react-router-dom"
import { logOut } from "../../utilities/users-services"
/*========================================
        Import Styling
========================================*/
import "./NavBar.css"

export default function NavBar({ user, setUser, navBarLinks, setNavBarLinks }) {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleLogout = async () => {
        logOut()
        setUser(null)
    }

    const handleClickMoblieMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }
    const handleMobileNavClick = () => {
        setMobileMenuOpen(false)
    }
    return (
        <>
            <div className={`mobile-nav-modal ${mobileMenuOpen ? `mobile-nav-open` : null}`}>
            <div className="nav-btns">
                    {navBarLinks.navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.to}
                            element={link.element}
                            className={`nav-btn ${!mobileMenuOpen ? `hidden` : null}`}
                            onClick={handleMobileNavClick}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="nav-user-div">
                    <button className={`nav-user nav-btn ${!mobileMenuOpen ? `hidden` : null}`} onClick={handleLogout}>LogOut</button>
                </div>
            </div>
            <div className="mobile-nav">
                <div className="hamburger-menu"
                    onClick={handleClickMoblieMenu}
                ></div>
                <div className="nav-logo">
                    <span className="text-blue">V</span>irtual<span className="text-blue">R</span>ealty
                </div>
            </div>
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
                    <button className="nav-user nav-btn" onClick={handleLogout}>LogOut</button>
                </div>
            </div>
        </>
    )
}
