"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";



function placeOrder(){

    const [counter,setCounter]=useState(5);
    const [link,setLink]=useState(false);


    useEffect(()=>{

        const timer= setInterval(()=>{
            setCounter(Counter=>counter-1);
        },1000)

        if(counter===0){
            clearInterval(timer)
            setLink(true)
        }

        return ()=>clearInterval(timer)

    },[counter])

    return(
        <div className="mt-40 flex justify-center items-center flex-col gap-10">
            <div className="flex justify-center items-center">
            <IoIosCheckmarkCircleOutline size={100} color="green" />
            <p className="text-5xl">Order placed</p>
            </div>
            <p className="text-xl">Redirecting to homepage in {counter} seconds...</p>
            {
                link && (
                   <Link href={'/'}> <p className="text-xl underline text-blue-600">Go the Home page </p> </Link>
                )
            }
            
        </div>
    )
}


export default placeOrder;