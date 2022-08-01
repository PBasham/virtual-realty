/*========================================
        Import Components
========================================*/
import { useState } from "react"
import ServiceCard from "./ServiceCard"

export default function ServiceCards() {
    const [serviceCards, setServiceCards] = useState([
        {
            title: "Buy",
            img: "https://blog.rossmortgage.com/wp-content/uploads/2017/03/best-online-home-buying-tools.jpg",
            miniDesc: "Want to find your new home and reduce the hassle?",
        },
        {
            title: "Sell",
            img: "https://www.gannett-cdn.com/-mm-/8fd3f2c5eeb4f432937d634a62b8f18185a92e99/c=0-125-2097-1305/local/-/media/2019/03/07/USATODAY/usatsports/MotleyFool-TMOT-caeb51db-sold-sign.jpg",
            miniDesc: "Selling your home can be stressful. We make it seamless.",
        },
        {
            title: "Concierge",
            img: "https://www.sinergicaservizi.it/wp-content/uploads/revslider/home-11/bell-concierge.jpg",
            miniDesc: "Finding your new home with a white glove experience",
        },
    ])
    return (
        <div className="service-cards">
            {serviceCards.map((service, index) => (
                <ServiceCard
                    key={index}
                    title={service.title}
                    img={service.img}
                    desc={service.miniDesc}
                />
            ))}
        </div>
    )
}
