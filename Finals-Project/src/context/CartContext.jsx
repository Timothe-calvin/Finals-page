// src/context/CartContext.jsx

import React, { createContext, useContext, useReducer } from 'react';

// Create a context
const CartContext = createContext();

// Initial state for the cart
const initialState = {
    items: [],
};

// Cart reducer to manage state
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] };
        case 'REMOVE_ITEM':
            return { 
                ...state, 
                items: state.items.filter(item => item.id !== action.payload.id) 
            };
        case 'CLEAR_CART':
            return { items: [] };
        default:
            return state;
    }
};

// Cart provider to wrap our application
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the cart context
export const useCart = () => {
    return useContext(CartContext);
};