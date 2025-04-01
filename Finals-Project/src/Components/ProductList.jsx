// src/components/ProductList.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./ProductList.css";

const ProductList = ({ filteredProducts }) => {
  const { cart, setCart } = useProductContext();

  const handleAddToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
  };

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count})
            </p>
          </Link>
          <button onClick={() => handleAddToCart(product)}>
            <AddShoppingCartIcon /> Add To Cart:
            {/* Add icon for adding to cart */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
