// src/components/ProductDetail.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const { dispatch } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: product });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count})</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default ProductDetail;