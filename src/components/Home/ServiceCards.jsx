/*========================================
        Import Components
========================================*/
import ServiceCard from "./ServiceCard"

export default function ServiceCards() {
    const serviceCards = [
        {
            title: "Buy",
            img: "https://blog.rossmortgage.com/wp-content/uploads/2017/03/best-online-home-buying-tools.jpg",
            miniDesc: "Browse through beautiful homes to buy.",
        },
        {
            title: "Sell",
            img: "https://www.gannett-cdn.com/-mm-/8fd3f2c5eeb4f432937d634a62b8f18185a92e99/c=0-125-2097-1305/local/-/media/2019/03/07/USATODAY/usatsports/MotleyFool-TMOT-caeb51db-sold-sign.jpg",
            miniDesc: "Sell dat house!",
        },
        {
            title: "Concierge",
            img: "https://www.sinergicaservizi.it/wp-content/uploads/revslider/home-11/bell-concierge.jpg",
            miniDesc: "This is a service we offer!",
        },
    ]
    return (
        <div className="content-div">
            <div className="service-cards">
                {serviceCards.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        img={service.image}
                        desc={service.miniDesc}
                    />
                ))}
            </div>
        </div>
    )
}
