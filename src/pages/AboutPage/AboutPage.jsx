/*========================================
        Import Dependencies
========================================*/
import { useEffect } from "react"
/*========================================
        Import Styles
========================================*/
import "./AboutPage.css"

export default function AboutPage({navBarLinks, setNavBarLinks}) {
    useEffect(() => {
        setNavBarLinks({...navBarLinks, activeNavLink: 1})
    },[])
  return (
    <div className="about-wrapper">
        <div className="mission-wrapper">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet aliquam. Ipsum dolor sit amet consectetur adipiscing elit. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Dignissim convallis aenean et tortor.</p>
        </div>
    </div>
  )
}
