/*========================================
        Import Dependencies
========================================*/
import { useEffect } from "react"
/*========================================
Import Components
========================================*/
import Mission from "../../components/About/Mission"
import Services from "../../components/About/Services"
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
            <Services />
            <div className="next-step-wrapper">
                <h2>Ready to take the next step?</h2>
                <p>Contact us today and we'll get you stared in no time!</p>
            </div>
        </div>
    )
}
