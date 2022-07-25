/*========================================
        import dependencies
========================================*/
import React from 'react';
import ReactDOM from 'react-dom/client';
/*========================================
        import pages & components
========================================*/
import App from './App';
/*========================================
        import styles
========================================*/
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);