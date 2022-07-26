/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect, useRef } from "react"
import { Routes, Route, Navigate, Redirect, useParams } from "react-router-dom"
import { getUser } from "../../utilities/users-services.js"

// import logo from './logo.svg';

/*========================================
        Import Pages & Components
========================================*/
import NavBar from "../../components/NavBar/NavBar.jsx"
import AuthPage from "../../pages/AuthPage/AuthPage.jsx"
import HomePage from "../../pages/HomePage/HomePage.jsx"
import AboutPage from "../../pages/AboutPage/AboutPage.jsx"
import WatchListPage from "../../pages/WatchListPage/WatchListPage.jsx"
import ExplorePage from "../../pages/ExplorePage/ExplorePage.jsx"
import UserProfilePage from "../UserProfilePage/UserProfilePage.jsx"
import ListingShowPage from "../ListingShowPage/ListingShowPage.jsx"
import Footer from "../../components/Footer/Footer.jsx"

/*========================================
        Import Styling
========================================*/
import './App.css'

function App() {
    const [user, setUser] = useState(getUser())
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
            {
                id: 4,
                name: "MyProfile",
                to: "/profile",
                element: <UserProfilePage />,
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
            {/* {user ?
                :
                null
            } */}
            {user ?
                <>
                    <NavBar
                        user={user}
                        setUser={setUser}
                        navBarLinks={navBarLinks}
                        setNavBarLinks={setNavBarLinks}
                    />
                    <div className="content-wrapper">
                        <Routes>
                            <Route
                                path="/home"
                                element={<HomePage
                                    navBarLinks={navBarLinks}
                                    setNavBarLinks={setNavBarLinks}
                                />} />
                            <Route
                                path="/about"
                                element={<AboutPage
                                    navBarLinks={navBarLinks}
                                    setNavBarLinks={setNavBarLinks}
                                />}
                            />
                            <Route
                                path="/watchlist"
                                element={<WatchListPage
                                    navBarLinks={navBarLinks}
                                    setNavBarLinks={setNavBarLinks}
                                />}
                            />
                            <Route
                                path="/explore"
                                element={<ExplorePage
                                    navBarLinks={navBarLinks}
                                    setNavBarLinks={setNavBarLinks}
                                />}
                            />
                            <Route
                                path="/explore/:id"
                                element={<ListingShowPage
                                    navBarLinks={navBarLinks}
                                    setNavBarLinks={setNavBarLinks}
                                />}
                            />
                            <Route
                                path="/profile/"
                                element={<UserProfilePage
                                    navBarLinks={navBarLinks}
                                    setNavBarLinks={setNavBarLinks}
                                    user={user}
                                    setUser={setUser}
                                />}
                            />
                            <Route
                                path="/*"
                                element={<Navigate to="/home" />}
                            />
                        </Routes>
                    </div>
                    <Footer />
                </>
                :
                <AuthPage setUser={setUser} />
            }
            { }
        </div>
    );
}

export default App;
