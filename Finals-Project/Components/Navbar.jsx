// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styling as needed

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">ShopApp</Link>
                <ul className="navbar-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;