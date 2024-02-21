'use client';
import React, { useContext, useState } from 'react'
import Image from 'next/image';
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import Link from 'next/link';
import { Cartcontext } from '@/Context/CartContext';
import axios from 'axios';


function Cart() {
    const { cartItems, setCartItems } = useContext(Cartcontext);
    const [quantity, setQuantity] = useState(1);


    function handleDecrease() {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    }
    function handelIncrease() {
        quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10);
    }

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.price;
    }, 0);

    async function handleRemoveFromCart(id,name) {
        try {
            await axios.delete(`http://localhost:3000/${name}`);
            const updatedCartItems = cartItems.filter(item => item.id !== id);
            setCartItems(updatedCartItems);
        } catch (error) {
            console.error(error);
        }


    }


    return (
        <div>
            <hr />
            <div className='mx-16 my-5'>
                <div className='mt-3 '>
                    {cartItems && cartItems.length > 0 ?
                        cartItems.map((product, index) => (
                            <div key={index} className="flex items-center mb-3">
                                <div className="mr-7">
                                    <Image src={product.image} alt={`Product ${product.id}`} height={200} width={200} className='hover:opacity-30 cursor-pointer' />
                                </div>
                                <div>
                                    <p className="font-bold">{product.name}</p>
                                    <p className="font-bold">${product.price.toFixed(2)}</p>
                                    <div className='flex gap-3 mt-3'>
                                        <button onClick={handleDecrease}><RiSubtractFill /></button>
                                        <p>{quantity}</p>
                                        <button onClick={handelIncrease}><IoAddSharp /></button>
                                    </div>
                                    <button className='p-2 bg-blue-400 rounded-lg mt-2 hover:bg-blue-300' onClick={() => handleRemoveFromCart(product.id,product.name)}>
                                        Remove
                                    </button>
                                </div>

                            </div>
                        ))
                        :
                        <div className='flex justify-center items-center'>
                            <p>No products in the cart</p>
                        </div>
                    }
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
                        <button className='p-3 rounded-md bg-black text-white hover:opacity-70 mt-2'>
                            Place order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
