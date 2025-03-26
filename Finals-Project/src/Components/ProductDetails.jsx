// src/components/ProductDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams();
    const { products } = useProductContext();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.find((prod) => prod.id === parseInt(id));
        setProduct(foundProduct);
    }, [id, products]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count})</p>
            <p>{product.description}</p>
            <Link to="/">Back to Products</Link>
        </div>
    );
};

export default ProductDetail;