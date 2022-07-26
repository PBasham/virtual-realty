/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect, useRef } from "react"
import { Routes, Route, Navigate, Redirect } from "react-router-dom"
import { getUser } from "../../utilities/users-services.js"

// import logo from './logo.svg';
/*========================================
        Import Styling
========================================*/
import './App.css'

function App() {
    const [user, setUset] = useState(getUser())
    const [navBarLinks, setNavBarLinks] = useState({
        activeNavLink: null,
        navLinks: [
            {
                id: 0,
                name: "Home",
                to: "/home",
                element: <HomePage />,
                subElement: [],
            },
            {
                id: 1,
                name: "About",
                to: "/about",
                element: <AboutPage />,
                subElement: {
                    activeSubElement: null,
                    subElements: [
                        {
                            id: 0,
                            name: "Company",
                            href: "#company",
                        },
                        {
                            id: 1,
                            name: "Team",
                            href: "#team",
                        },
                        {
                            id: 2,
                            name: "Services",
                            href: "#services",
                        },
                    ]
                }
            },
            {
                id: 2,
                name: "Watchlist",
                to: "/watchlist",
                element: <WatchListPage />,
                subElement: [],
            },
            {
                id: 3,
                name: "Explore",
                to: "/explore",
                element: <ExplorePage />,
                subElement: [],
            },
        ]
    })


    /*========================================
            Functins
    ========================================*/


    //==-- END FUNCTIONS--==//
    return (
        <div className="App">
            Testing
        </div>
    );
}

export default App;
