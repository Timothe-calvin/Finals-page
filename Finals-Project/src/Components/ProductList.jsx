// src/Components/ProductList/ProductList.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import "./ProductList.css";

const ProductList = ({ filteredProducts }) => {
  const { addToCart } = useProductContext();
  const [sortedProducts, setSortedProducts] = useState(filteredProducts);
  const [sortOption, setSortOption] = useState("none"); // Default to 'none' meaning no sorting

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  // Function to handle the sorting of products based on price
  const handleSort = (e) => {
    const order = e.target.value;
    setSortOption(order);

    let sorted = [...filteredProducts];

    // Only sort if there is a valid option selected
    if (order === "lowToHigh") {
      sorted = sorted.sort((a, b) => a.price - b.price); // Sort by price from low to high
    } else if (order === "highToLow") {
      sorted = sorted.sort((a, b) => b.price - a.price); // Sort by price from high to low
    }

    setSortedProducts(sorted);
  };

  useEffect(() => {
    // Reset the sorting whenever filteredProducts change
    setSortedProducts(filteredProducts);
  }, [filteredProducts]);

  return (
    <div className="product-list">
      <h1>Product List</h1>

      {/* Sort Dropdown */}
      <div className="sort-container">
        <label htmlFor="sort">Sort by Price:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={handleSort}
          className="sort-dropdown"
        >
          <option value="none">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-card-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-card-details">
                <h3>{product.title}</h3>
                <p>{product.description.substring(0, 80)}...</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating.rate} / 5</p>
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product-detail/${product.id}`}
                  className="view-details"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
