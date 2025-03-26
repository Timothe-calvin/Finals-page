// src/App.jsx

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider, useProductContext } from "./context/ProductContext";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import axios from "axios";
import './App.css';

const App = () => {
    const { setProducts } = useProductContext();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOption, setSortOption] = useState('lowToHigh');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
            setFilteredProducts(response.data);
        };
        fetchProducts();
    }, [setProducts]);

    const handleSearch = (searchTerm) => {
        const results = products.filter(product => 
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    };

    const handleSort = (order) => {
        setSortOption(order);
        const sorted = [...filteredProducts].sort((a, b) => 
            order === 'lowToHigh' ? a.price - b.price : b.price - a.price
        );
        setFilteredProducts(sorted);
    };

    return (
        <Router>
            <Navbar onSearch={handleSearch} onSort={handleSort} />
            <Routes>
                <Route path="/" element={<ProductList filteredProducts={filteredProducts} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
};

// Wrap App component with ProductProvider
export default function AppWrapper() {
    return (
        <ProductProvider>
            <App />
        </ProductProvider>
    );
}