// src/components/Cart.jsx

import React from "react";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import './Cart.css'
const Cart = () => {
    const { cart, setCart } = useProductContext(); // Access the cart from context

    const handleRemoveItem = (itemToRemove) => {
        const updatedCart = cart.filter(item => item.id !== itemToRemove.id); // Remove specific item
        setCart(updatedCart); // Update the cart state
    };

    const handleClearCart = () => {
        setCart([]); // Clear the cart
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
                                <button onClick={() => handleRemoveItem(item)}>Remove</button> {/* Remove item button */}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleClearCart}>Clear Cart</button> {/* Clear cart button */}
                </>
            )}
            <Link to="/">Continue Shopping</Link>
        </div>
    );
};

export default Cart;