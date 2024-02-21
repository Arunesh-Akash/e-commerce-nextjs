import React from 'react'
import { MdCopyright } from "react-icons/md";


function CustomFoot() {
    return (
        <>
        <div className='container bg-white mt-12 mx-16 flex justify-center items-center flex-col text-black shadow-2xl'>

            <div className='text-center mt-24 '>
                <h1 className='font-semibold text-base'>Subscribe To Get Offers In Your Inbox</h1>
                <p className='font-normal text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tempore?</p>
            </div>
            <div className='mt-20 mb-20'>
                <input type='email' placeholder='Your email address..' className='w-8/12 p-2 rounded shadow-xl border border-solid border-gray-400'/>
                <button className='bg-black p-2 rounded-md text-white hover:bg-pink-600 ml-2'>
                    Subscribe
                </button>
            </div>
            
        </div>
        <div className='container bg-black flex justify-center items-center mx-16 mb-7 h-28'>
                <p className='text-white flex flex-wrap'>Copyright <MdCopyright/> 2024 T-Shirts Store | Powered by T-Shirts Store</p>
            </div>
        </>
    )
}

export default CustomFoot;