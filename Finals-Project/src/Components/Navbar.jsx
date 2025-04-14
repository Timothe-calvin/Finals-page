import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for navigation
import { useProductContext } from "../context/ProductContext";
import "./Navbar.css";

const Navbar = ({ onSearch, searchTerm, setSearchTerm }) => {
  const { cart } = useProductContext(); // Get the cart from context
  const navigate = useNavigate(); // useNavigate hook to allow navigation

  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle the back button functionality
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Brand Name */}
        <Link to="/" className="navbar-logo">
          <h2>ShopMate</h2>
        </Link>

        <div className="navbar-links">
          {/* Back Link */}
          <button onClick={handleBack} className="back-btn">
            Back
          </button>

          {/* Search Bar */}
          <form onSubmit={onSearch} className="search-form">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>

          {/* Cart Link */}
          <Link to="/cart" className="nav-link">
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
