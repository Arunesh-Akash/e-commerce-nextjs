'use client';
import Link from 'next/link'
import React, { useContext } from 'react'
import { BsCart2 } from "react-icons/bs";
import { Cartcontext } from '@/Context/CartContext'
import { UserContext } from '@/Context/UserContext';
import axios from 'axios';

function CustomNav() {
    const { cartItems } = useContext(Cartcontext);
    const { user,setUser } = useContext(UserContext);
   
    async function handleLogOut() {
        try {
            const response = await axios.post('http://localhost:3000/api/logout');
            console.log(response);
            setUser(null);
            localStorage.clear('currentUser');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-between mx-10 my-5'>
            <div>
                <ul className='flex gap-3 mt-7 ml-10'>
                    <Link href={'/shop'}><li>BUY T-SHIRTS</li></Link>
                    <Link href={'/about'}><li>ABOUT</li></Link>
                    <Link href={'/contact'}><li>CONTACT</li></Link>
                </ul>
            </div>
            <div>
                <h1 className='text-4xl font-black mr-10'>T-SHIRTS</h1>
                <hr />
                <div className='flex gap-6 text-lg ml-3'>
                    <p>s</p>
                    <p>t</p>
                    <p>o</p>
                    <p>r</p>
                    <p>e</p>
                </div>
            </div>
            <div>
                <ul className='flex gap-4 mt-7 mr-10'>
                    <Link href={'/cart'} >
                        <div className="relative">
                            <BsCart2 className='text-xl' />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full px-2 text-xs w-4 h-4 flex items-center justify-center">
                                    {cartItems.length}
                                </span>

                            )}
                        </div>
                    </Link>
                    {!user && (
                        <Link href={'/login'}>LOG IN</Link>

                    )}
                    {user && (
                        <>
                            <li>{user.name}</li>
                            <button onClick={handleLogOut}><li>LOG OUT</li></button>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default CustomNav
