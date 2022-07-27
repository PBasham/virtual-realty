/*========================================
        Import Components
========================================*/
import ServiceCard from "./ServiceCard"

export default function ServiceCards() {
    const serviceCards = [
        {
            title: "Buy",
            image: "",
            miniDesc: "Browse through beautiful homes to buy.",
        },
        {
            title: "Sell",
            image: "",
            miniDesc: "Sell dat house!",
        },
        {
            title: "Concierge",
            image: "",
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
