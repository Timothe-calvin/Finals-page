// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ onSearch, onSort, onReset }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("lowToHigh");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
        setSearchTerm('');
    };

    const handleReset = () => {
        onReset(); // Call the reset function to show all products
        setSearchTerm(''); // Clear the search input
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        onSort(e.target.value);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo" onClick={handleReset}>Product Store</Link>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                />
                <button type="submit">Search</button>
            </form>
            <select onChange={handleSortChange} value={sortOrder}>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
            </select>
            <Link to="/cart">Cart</Link>
        </nav>
    );
};

export default Navbar;