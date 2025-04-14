// src/Components/ProductDetail/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import "./ProductDetails.css";

const ProductDetail = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const { products, addToCart } = useProductContext();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // For navigating back to the home page

  // Find the selected product by its ID
  useEffect(() => {
    const selectedProduct = products.find(
      (prod) => prod.id === parseInt(productId)
    );
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [productId, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleBackToHome = () => {
    navigate("/"); // Navigate back to the home page (Product List)
  };

  if (!product) {
    return <div>Loading...</div>; // Loading state if the product is not yet available
  }

  return (
    <div className="product-detail">
      {/* Back to Home Button */}
      <button className="back-button" onClick={handleBackToHome}>
        Back to Home
      </button>

      {/* Product Detail Content */}
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-detail-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating.rate} / 5</p>
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
