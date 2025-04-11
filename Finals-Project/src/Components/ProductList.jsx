// src/Components/ProductList/ProductList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import './ProductList.css';

const ProductList = ({ filteredProducts }) => {
  const { addToCart } = useProductContext();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-card-details">
              <h3>{product.title}</h3>
              <p>{product.description.substring(0, 80)}...</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating.rate} / 5</p>
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <Link to={`/product-detail/${product.id}`} className="view-details">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
