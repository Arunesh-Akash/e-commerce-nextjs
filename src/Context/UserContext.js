'use client';
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();





const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const loadUser = async () => {

            try {
                const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null
                setUser(currentUser);


            } catch (error) {
                console.log({ message: 'User is not load' });
                setUser(null);
                localStorage.removeItem('currentUser');
            }
        }
        loadUser();
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;