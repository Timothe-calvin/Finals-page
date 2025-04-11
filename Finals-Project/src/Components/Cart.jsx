// src/Components/Cart/Cart.jsx
import React from "react";
import { useProductContext } from "../context/ProductContext";
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useProductContext();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (productId, operation) => {
    updateQuantity(productId, operation);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => handleQuantityChange(item.id, "decrease")}>-</button>
                      <span>Quantity: {item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, "increase")}>+</button>
                    </div>
                    <button
                      className="remove-from-cart"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
