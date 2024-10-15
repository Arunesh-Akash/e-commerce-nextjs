import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function CustomStar({ star }) {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    star >= index + 1 ? <FaStar /> : star >= number ? <FaStarHalfAlt /> : <AiOutlineStar />
                }
            </span>
        )
    })
    return (
        <>
            <div className='flex ml-2'>{ratingStar}</div>
        </>
    )
}

export default CustomStar