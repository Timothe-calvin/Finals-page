// src/components/Cart.jsx

import React from "react";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearAllIcon from "@mui/icons-material/ClearAll";

const Cart = () => {
  const { cart, setCart } = useProductContext();

  const handleRemoveItem = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleRemoveItem(item)}>
                  <DeleteIcon /> Delete Item {/* Icon for removing item */}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleClearCart}>
            <ClearAllIcon /> {/* Icon for clearing the cart */}
            Clear Cart
          </button>
        </>
      )}
      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default Cart;
