// src/components/Cart.jsx

import React from "react";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useProductContext();

    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/">Continue Shopping</Link>
        </div>
    );
};

export default Cart;