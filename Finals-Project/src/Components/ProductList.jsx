// src/components/ProductList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductList.css';  // Add styling as needed

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { dispatch } = useCart(); // Use cart context

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        dispatch({ type: 'ADD_ITEM', payload: product });
    };

    return (
        <div className="product-list">
            {products.map((product) => (
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