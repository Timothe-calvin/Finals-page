// src/components/ProductList.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import axios from "axios";
import './ProductList.css';

const ProductList = ({ filteredProducts }) => {
    const { cart, setCart } = useProductContext();

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="product-list">
            {filteredProducts.map((product) => (
                <div key={product.id} className="product">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating.rate} ({product.rating.count})</p>
                    </Link>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;