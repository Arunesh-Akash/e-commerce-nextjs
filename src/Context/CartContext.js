'use client';
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const Cartcontext = createContext(null);


function ContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);


    // async function handleAddtoCart(getCurrentItem) {
    //     let tempCartItem = [...cartItems];
    //     const index = tempCartItem.findIndex((item) => item.id === getCurrentItem.id);

    //     console.log(index);
    //     if (index === -1) {
    //         tempCartItem.push(getCurrentItem);
    //         setCartItems(tempCartItem);
    //         localStorage.setItem('cartItems', JSON.stringify(cartItems));
            
    //     }
    //     console.log(tempCartItem);
    // }
    useEffect(() => {
        // const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // setCartItems(storedCartItems);
        const loadCart = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/cart');
                setCartItems(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        loadCart();
    }, [])
    return (
        <Cartcontext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </Cartcontext.Provider>
    )
}

export default ContextProvider;