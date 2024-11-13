import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';  

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className={`navbar-item ${isHome ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                </li>
                <li className={`navbar-item ${location.pathname === '/about' ? 'active' : ''} ${!isHome ? 'disabled' : ''}`}>
                    <Link to="/about">About</Link>
                </li>
                <li className={`navbar-item ${location.pathname === '/ex1' ? 'active' : ''} ${!isHome ? 'disabled' : ''}`}>
                    <Link to="/ex1">Ex. 1</Link>
                </li>
                <li className={`navbar-item ${location.pathname === '/ex2' ? 'active' : ''} ${!isHome ? 'disabled' : ''}`}>
                    <Link to="/ex2">Ex. 2</Link>
                </li>
                <li className={`navbar-item ${location.pathname === '/ex3' ? 'active' : ''} ${!isHome ? 'disabled' : ''}`}>
                    <Link to="/ex3">Ex. 3</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
