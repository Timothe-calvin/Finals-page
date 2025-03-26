// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from '../Components/ProductList';
import ProductDetail from '../Components/ProductDetails';
import Checkout from '../Components/Checkout';
import Navbar from '../Components/Navbar';
import { CartProvider } from './context/CartContext';
import './App.css'; // Add any necessary styles here

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Checkout />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;