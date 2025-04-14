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

  // Fetch the products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Set the products into context
        setFilteredProducts(response.data); // Initially show all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [setProducts]); // Only run on initial load

  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* Home Page Route - Product List page */}
          <Route
            path="/"
            element={<ProductList filteredProducts={filteredProducts} />}
          />

          {/* Product Details Page Route */}
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />

          {/* Cart Page Route */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default function AppWrapper() {
  return (
    <ProductProvider>
      <App />
    </ProductProvider>
  );
}
