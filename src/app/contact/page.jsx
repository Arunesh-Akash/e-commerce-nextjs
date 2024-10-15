import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


function Contact() {
  return (
    <>
      <div className='flex justify-center items-center flex-col gap-5'>
        <hr />
        <div className='flex flex-col justify-center items-center mt-14 gap-2'>
          <h1 className='font-semibold text-6xl'>
            Contact
          </h1>
          <hr className="w-14 border-t-2 border-black" />

          <p className='font-semibold text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore, quis distinctio dolorum optio maiores ipsum vero earum cupiditate blanditiis.
          </p>

        </div>
      </div >
      <div className='bg-red-200 max-w-3xl flex ml-16 mt-9 p-7'>
        <div className='ml-12'>
          <div className='mt-36 '>
            <h1 className='font-bold text-5xl'>Get in touch</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, eaque?</p>
          </div>
          <div className='mt-4'>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center'>
                <MdLocationOn className='text-lg' /> <p className='text-sm underline font-medium ml-1'>123 Fifth Avenue,New York, NY 10160</p>
              </div>
              <div className='flex items-center'>
                <MdEmail className='text-lg' /> <p className='text-sm underline font-medium ml-1'>contact@info.com</p>
              </div>
              <div className='flex items-center'>
                <FaPhoneAlt className='text-lg' /> <p className='text-sm font-medium ml-1'>9-334-7565-9787</p>
              </div>
            </div>
          </div>

        </div>
        <div className='bg-white p-10 ml-96 max-h-96 max-w-2xl mt-20 shadow-lg'>
          <div className='flex gap-4 mb-4'>
            <input type='text' placeholder='First Name' className='w-60 p-2 border border-solid border-gray-300'/>
            <input type='text' placeholder='Last Name' className='w-60 p-2 border border-solid border-gray-300'/>
          </div>
          <div className='flex flex-col gap-4'>
            <input type='email' placeholder='Your email address...' className='p-2 w-full border border-solid border-gray-300'/>
            <textarea placeholder='Message' rows={5} className='p-2 w-full border border-solid border-gray-300'/>
            <button className='bg-black p-2 rounded-md text-white w-32'>
              Send
            </button>
          </div>

        </div>
      </div>
    </>

  )
}

export default Contact