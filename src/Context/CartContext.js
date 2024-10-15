'use client';
import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export const Cartcontext = createContext(null);


function ContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    

    useEffect(() => {
        const loadCart = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('currentUser'));
                if (user) {
                    const response = await axios.get('http://localhost:3000/api/cart');
                    setCartItems(response.data);
                }

            } catch (error) {
                console.error(error);
            }
        }
        loadCart();
    }, [cartItems])
    return (
        <Cartcontext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </Cartcontext.Provider>
    )
}

export default ContextProvider;

