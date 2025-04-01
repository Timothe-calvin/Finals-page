// src/components/ProductDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import "./ProductDetails.css";
const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const { products, cart, setCart } = useProductContext(); // Access products and cart from context
  const [product, setProduct] = useState(null); // State to store the selected product

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct); // Set the product details
  }, [id, products]);

  const handleAddToCart = () => {
    if (product) {
      setCart([...cart, product]); // Add the product to the cart
      alert(`${product.title} has been added to your cart!`); // Alert confirmation
    }
  };

  if (!product) {
    return <p>Loading...</p>; // Show loading message until product is found
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
