'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import signSvg from '../../assessts/sign.svg'
import axios from 'axios';
import { toast } from 'react-toastify';

function Sign() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/api/users', user, credentials, {
            withCredentials: true,
        });
        console.log(response);
        toast.success("User created successfully", {
            position: 'top-center'
        });
        setUser({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div className='grid grid-cols-12 mt-7 justify-center'>
            <div className='col-span-5 col-start-5'>
                <div>
                    <h1 className='text-center text-3xl text-blue-400'>
                        Sign Up Here
                    </h1>
                    <hr className="w-14 border-t-2 border-blue-500" />
                    <div className='flex justify-center mt-6'>
                        <Image src={signSvg} alt='Sign' style={{ width: '40%' }} priority={false} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-5'>
                            <label htmlFor='user_name'
                                className='block text-sm font-medium mb-2 mx-2'
                            >
                                Name
                            </label>
                            <input type='text' placeholder='Name' id='user_name' className='w-full p-3 rounded-2xl bg-white shadow-xl border border-solid border-gray-400'
                                onChange={(e) => setUser({
                                    ...user, name: e.target.value
                                })}
                                value={user.name}
                            />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor='user_email'
                                className='block text-sm font-medium mb-2 mx-2'
                            >
                                Email
                            </label>
                            <input type='email' placeholder='Email' id='user_email' className='w-full p-3 rounded-2xl bg-white shadow-xl border border-solid border-gray-400'
                                onChange={(e) => setUser({
                                    ...user, email: e.target.value
                                })}
                                value={user.email}
                            />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor='user_password'
                                className='block text-sm font-medium mb-2 mx-2'
                            >
                                Password
                            </label>
                            <input type='password' placeholder='Password' id='user_password' className='w-full p-3 rounded-2xl bg-white shadow-xl border border-solid border-gray-400'
                                onChange={(e) => setUser({
                                    ...user, password: e.target.value
                                })}
                                value={user.password}
                            />
                        </div>
                        <div className='mt-5 text-center'>
                            <button type='submit' className='bg-black text-white rounded-xl p-3 hover:opacity-70'>
                                Signup
                            </button>
                            <button type='reset' className='bg-black text-white rounded-xl p-3 mx-3 hover:opacity-70'>
                                Reset
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sign