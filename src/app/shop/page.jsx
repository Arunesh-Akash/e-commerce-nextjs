'use client';
import React, { useContext, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import Image from 'next/image';
import product1 from '../../assessts/product1.jpg';
import product2 from '../../assessts/product2.jpg';
import product3 from '../../assessts/product3.jpg';
import product4 from '../../assessts/product4.jpg';
import product5 from '../../assessts/product5.jpg';
import product6 from '../../assessts/product6.jpg';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import CustomStar from '../Component/CustomStar';

function Shop() {
    const [sortBy, setSortBy] = useState('default');
    const router = useRouter();
    const [products, setProducts] = useState([
        { id: 1, name: 'T-Shirt Name 1', category: 'MEN', price: 33.00, image: product1, star: 1.5 },
        { id: 2, name: 'T-Shirt Name 2', category: 'WOMEN', price: 23.00, image: product2, star: 2.3 },
        { id: 3, name: 'T-Shirt Name 3', category: 'MEN', price: 21.00, image: product3, star: 3.5 },
        { id: 4, name: 'T-Shirt Name 4', category: 'WOMEN', price: 36.00, image: product4, star: 5 },
        { id: 5, name: 'T-Shirt Name 5', category: 'WOMEN', price: 18.00, image: product5, star: 4.4 },
        { id: 6, name: 'T-Shirt Name 6', category: 'MEN', price: 17.00, image: product6, star: 3 },
    ]);

    const sortProducts = (criteria) => {
        const sortedProducts = [...products];
        if (criteria === 'priceLowToHigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (criteria === 'priceHighToLow') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setProducts(sortedProducts);
    };


    async function handleSubmit(product) {
        try {
            const { data: cartItems } = await axios.get('http://localhost:3000/api/cart');
            const existingProduct = cartItems.find(cartItem => cartItem.name === product.name)
            if (existingProduct) {

                const newQuantity = existingProduct.quantity + 1;
                const name = product.name;
                const response = await axios.put(`http://localhost:3000/api/cart/${name}`, { quantity: newQuantity })
                console.log(response.data)
            }
            else {
                const productData = {
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    image: product.image.src,

                };
                const response = await axios.post('http://localhost:3000/api/cart', productData);
                console.log(response.data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <hr />
            <div className='mt-24 font-medium text-6xl ml-5'>
                <h1>Shop</h1>
            </div>
            <div className='mt-11 ml-5 flex justify-between'>
                <p className='font-light text-xs'>Showing 1-6 of 10 results</p>
                <select onChange={(e) => sortProducts(e.target.value)}>
                    <option value='default'>Default sorting</option>
                    <option value='priceLowToHigh'>Sort by price: low to high</option>
                    <option value='priceHighToLow'>Sort by price: high to low</option>
                </select>
            </div>
            <div className="flex flex-wrap gap-3 mx-4 mt-6">
                {products.map((product, index) => (
                    <div key={index}>
                        <Image src={product.image} alt={`Product ${product.id}`} height={398} width={332} />
                        <span className="font-light text-xs">{product.category}</span>
                        <p className="font-bold ml-2">{product.name}</p>
                        <CustomStar star={product.star} />
                        <div className='flex justify-between'>
                            <p className="font-bold ml-2">${product.price.toFixed(2)}</p>
                            <button className='mr-6 text-2xl' onClick={() => handleSubmit(product)}><FaCartPlus /></button>
                        </div>

                    </div>
                ))}
            </div>
            <div className='border border-solid border-gray-400 w-44 mt-12 mx-auto'>
                <p className='font-normal p-2 text-xs text-center flex justify-center items-center'>No more products to show.</p>
            </div>
        </div>
    );
}

export default Shop;
