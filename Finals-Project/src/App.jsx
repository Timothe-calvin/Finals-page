// src/App.jsx

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider, useProductContext } from "./context/ProductContext";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import axios from "axios";
import "./App.css";

const App = () => {
  const { setProducts, products } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("lowToHigh");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setFilteredProducts(response.data); // Display all products initially
    };
    fetchProducts();
  }, [setProducts]);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const results = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products); // Reset to full list if no search term
    }
  };

  const handleSort = (order) => {
    setSortOption(order);
    const sorted = [...filteredProducts].sort((a, b) =>
      order === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
    setFilteredProducts(sorted); // Apply sorting based on the selected order
  };

  const handleReset = () => {
    setFilteredProducts(products); // Reset to full list when called
  };

  return (
    <Router>
      <Navbar
        onSearch={handleSearch}
        onSort={handleSort}
        onReset={handleReset}
      />
      <Routes>
        <Route
          path="/"
          element={<ProductList filteredProducts={filteredProducts} />}
        />
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
