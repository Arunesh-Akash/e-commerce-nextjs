'use client';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import Link from 'next/link';
import { Cartcontext } from '@/Context/CartContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Cart() {
    const router = useRouter();
    const { cartItems, setCartItems } = useContext(Cartcontext);

    const updateQuantity = async (name, newQuantity) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/cart/${name}`, { quantity: newQuantity }, credentials, {
                withCredentials: true,
            });
            console.log(response.data);


            const updatedItems = cartItems.map(item => {
                if (item.name === name) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
            setCartItems(updatedItems);

        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };


    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    async function handleRemoveFromCart(name) {
        try {
            await axios.delete(`http://localhost:3000/api/cart/${name}`, {
                withCredentials: true,
            });
            const updatedCartItems = cartItems.filter(item => item.name !== name);
            setCartItems(updatedCartItems);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleOrder() {
        try {

            if (totalPrice > 0) {

                router.push('/place-order');
                const response = await axios.delete('http://localhost:3000/api/cart', {
                    withCredentials: true,
                });
                console.log(response.data);
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <hr />
            <div className='mx-16 my-5'>
                <div className='mt-3'>
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((product) => (
                            <div key={product._id} className="flex items-center mb-3">
                                <div className="mr-7">
                                    <Image src={product.image} alt={`Product ${product.name}`} height={200} width={200} className='hover:opacity-30 cursor-pointer' />
                                </div>
                                <div>
                                    <p className="font-bold">{product.name}</p>
                                    <p className="font-bold">${(product.price * product.quantity).toFixed(2)}</p>
                                    <div className='flex gap-3 mt-3'>
                                        <button onClick={() => updateQuantity(product.name, Math.max(1, product.quantity - 1))}>
                                            <RiSubtractFill />
                                        </button>
                                        <p>{product.quantity}</p>
                                        <button onClick={() => updateQuantity(product.name, Math.min(10, product.quantity + 1))}>
                                            <IoAddSharp />
                                        </button>
                                    </div>
                                    <button className='p-2 bg-blue-400 rounded-lg mt-2 hover:bg-blue-300' onClick={() => handleRemoveFromCart(product.name)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='flex justify-center items-center'>
                            <p>No products in the cart</p>
                        </div>
                    )}
                </div>
                <div className='mt-5 flex justify-between'>
                    <div>
                        <Link href={'/shop'}>
                            <button className='p-5 rounded-md bg-black text-white hover:opacity-70'>
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                    <div className='shadow-2xl p-7'>
                        <p className='font-bold text-xl'>Total Price: ${totalPrice.toFixed(2)}</p>
                        <button className='p-3 rounded-md bg-black text-white hover:opacity-70 mt-2' onClick={handleOrder}>
                            Place order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
