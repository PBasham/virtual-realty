/*========================================
        Import Dependencies
========================================*/
import { useEffect } from "react"
/*========================================
Import Components
========================================*/
import Mission from "../../components/About/Mission"
import Team from "../../components/About/Team"
/*========================================
        Import Styles
========================================*/
import "./AboutPage.css"

export default function AboutPage({ navBarLinks, setNavBarLinks }) {

    useEffect(() => {
        setNavBarLinks({ ...navBarLinks, activeNavLink: 1 })
    }, [])
    return (
        <div className="about-wrapper">
            <Mission />
            <Team />
        </div>
    )
}
