/*========================================
        import dependencies
========================================*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx"
/*========================================
        import pages & components
========================================*/
import App from './pages/App/App';
/*========================================
        import styles
========================================*/
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop />
            <App />
        </Router>
    </React.StrictMode>
);