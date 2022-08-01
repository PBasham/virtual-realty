/*========================================
        Import Styles
========================================*/
import "./Footer.css"
export default function Footer() {
    return (
        <div className="footer-wrapper">
            <ul className="footer-ul ul-company">
                <li><h2>Company</h2></li>
                <li>Mission</li>
                <li>Team</li>
                <li>Services</li>
            </ul>
            <ul className="footer-ul ul-contact">
            <li><h2>Contact Us</h2></li>
                <li>Need help?</li>
                <li>
                    Email
                    <a href="">gethelp@virtualrealty.com</a>
                </li>
                <li>
                    Phone
                    (602) 719-4521 x7672
                </li>
            </ul>
            <ul className="footer-ul ul-locatoin">
            <li><h2>Locaton</h2></li>
                <li>761 Marlen Fall, West Greenbury</li>
                <li>Michigan 19023</li>
            </ul>
        </div>
    )
}
