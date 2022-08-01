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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar neque laoreet suspendisse. Viverra mauris in aliquam sem fringilla ut. Pharetra pharetra massa massa ultricies. Nulla malesuada pellentesque elit eget gravida cum.",
        },
        {
            id: 1,
            name: "Sell",
            img: "https://sayonadecor.com/wp-content/uploads/2022/03/s2.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Dignissim cras tincidunt lobortis feugiat vivamus at. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Leo a diam sollicitudin tempor id eu.",
        },
        {
            id: 2,
            name: "Concierge",
            img: "https://www.clevelandbankruptcyattorney.com/wp-content/uploads/2015/10/woman-holding-house-representing-estate.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis. Faucibus interdum posuere lorem ipsum. Sapien et ligula ullamcorper malesuada proin libero. Morbi blandit cursus risus at ultrices mi tempus imperdiet.",
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
