// src/context/ProductContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create ProductContext to share data across components
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Holds the list of products
  const [cart, setCart] = useState([]); // Holds the products added to the cart

  // Add product to the cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity by 1
            : item
        )
      );
    } else {
      // If it's a new product, add it to the cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    // Remove product by id
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Update product quantity in the cart
  const updateQuantity = (productId, operation) => {
    // Increase or decrease quantity based on operation
    setCart(
      cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity:
                operation === "increase"
                  ? item.quantity + 1
                  : item.quantity - 1,
            }
          : item
      )
    );
  };

  // Clear all products from the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use ProductContext in other components
export const useProductContext = () => useContext(ProductContext);
