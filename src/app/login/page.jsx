'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import signSvg from '../../assessts/sign.svg'
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/Context/UserContext';



function Login() {
    const router = useRouter();
    const { setUser } = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState({
        email: '',
        password: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', currentUser , {
                withCredentials: true,
              });
            toast.success('Login Successfully', {
                position: 'top-center'
            });

            localStorage.setItem('currentUser', JSON.stringify(response.data.user));
            setUser(response.data.user)
            setCurrentUser({
                email: '',
                password: ''
            })

            router.push('/shop');

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <hr />
            <div className='grid grid-cols-12 mt-7 justify-center'>
                <div className='col-span-5 col-start-5'>
                    <div>
                        <h1 className='text-center text-3xl text-blue-400'>
                            Login Here
                        </h1>
                        <hr className="w-14 border-t-2 border-blue-500" />
                        <div className='flex justify-center mt-12'>
                            <Image src={signSvg} alt='Sign' style={{ width: '40%' }} />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mt-5'>
                                <label htmlFor='user_email'
                                    className='block text-sm font-medium mb-2 mx-2'
                                >
                                    Email
                                </label>
                                <input type='email' placeholder='Email' id='user_email' className='w-full p-3 rounded-2xl bg-white shadow-xl border border-solid border-gray-400'
                                    onChange={(e) => setCurrentUser({
                                        ...currentUser, email: e.target.value
                                    })}
                                    value={currentUser.email}
                                />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor='user_password'
                                    className='block text-sm font-medium mb-2 mx-2'
                                >
                                    Password
                                </label>
                                <input type='password' placeholder='Password' id='user_password' className='w-full p-3 rounded-2xl bg-white shadow-xl border border-solid border-gray-400'
                                    onChange={(e) => setCurrentUser({
                                        ...currentUser, password: e.target.value
                                    })}
                                    value={currentUser.password}
                                />
                            </div>
                            <div className='mt-5 text-center'>
                                <button type='submit' className='bg-black text-white rounded-xl p-3 hover:opacity-70'>
                                    Login
                                </button>
                                <button type='reset' className='bg-black text-white rounded-xl p-3 mx-3 hover:opacity-70'>
                                    Reset
                                </button>
                            </div>
                        </form>
                        <div className='flex gap-2 mt-10 justify-center items-center'>
                            <p>Have your account?</p>
                            <Link href={'/sign'} className='text-green-700 underline'>SignUp</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login