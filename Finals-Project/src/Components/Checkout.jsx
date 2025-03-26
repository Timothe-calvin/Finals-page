// src/components/Checkout.jsx

import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const { state, dispatch } = useCart();

    const handleRemoveFromCart = (item) => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <div className="checkout">
            <h1>Shopping Cart</h1>
            {state.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {state.items.map((item) => (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={handleClearCart}>Clear Cart</button>
        </div>
    );
};

export default Checkout;