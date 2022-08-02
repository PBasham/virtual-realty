/*========================================
        Import Dependencies
========================================*/
import { useState } from "react"
import ServicesCard from "./ServicesCard"
/*========================================
        Import Components
========================================*/


export default function Services() {
    const [services, setServices] = useState([
        {
            id: 0,
            name: "Buy",
            img: "https://ibuyer.com/blog/wp-content/uploads/2020/10/sell-house-to-investor.jpg",
            description: "House-hunting made easier. Find and scroll through your ideal locations and homes all at your home. By connecting with one of our Real Estate agents, we’ll ensure you get the best price and rates!",
        },
        {
            id: 1,
            name: "Sell",
            img: "https://sayonadecor.com/wp-content/uploads/2022/03/s2.png",
            description: "Not sure where to begin? Too many steps? We got you covered! We’ll walk  you through what needs to be done and how we’ll handle the process so that you can just sit, back, relax, and enjoy!",
        },
        {
            id: 2,
            name: "Concierge",
            img: "https://www.clevelandbankruptcyattorney.com/wp-content/uploads/2015/10/woman-holding-house-representing-estate.jpg",
            description: "Make sure your new home is not only your dream home, but the right home. We’ll connect you with the best inspectors, interior designers, plumbers, electricians, etc. in town and at the best best!",
        },
    ])
  return (
    <div className="services-wrapper">
        <h2>Services</h2>
        <div className="services-list">
            {services.map((service, index) => (
                <ServicesCard 
                    key={index}
                    service={service}
                />
            ))
            }

        </div>
    </div>
  )
}
