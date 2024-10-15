import Image from 'next/image'
import React from 'react'
import about from '../../assessts/about.jpg'

function About() {
    return (
        <div className='flex justify-center items-center flex-col gap-5'>
            <hr />
            <div className='flex flex-col justify-center items-center mt-14 gap-2 w-3/6'>
                <h1 className='font-semibold text-6xl'>
                    About
                </h1>
                <hr className="w-14 border-t-2 border-black" />
                <p className='font-semibold text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore, quis distinctio dolorum optio maiores ipsum vero earum cupiditate blanditiis.
                </p>
                <p className='font-light text-xs'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae numquam nobis molestiae eos cum. Fuga similique inventore sapiente dolorum. Labore repellendus nam ipsa sunt culpa illo amet explicabo ut accusamus facere debitis, eos similique, ab corrupti sequi voluptates itaque asperiores numquam iure veritatis tempora velit blanditiis inventore! Quisquam, ratione.
                </p>
            </div>
            <div className='relative mt-9'>
                <div className='absolute inset-1 bg-black opacity-50'></div>
                <Image src={about} alt='About page' height={607} width={1331} className='opacity-35' />
                <div className='absolute left-0 top-1/2 transform -translate-y-1/2 text-center w-1/4'>
                    <div className='text-xl font-bold text-white ml-20'>
                        <h1 className='font-light text-xs text-left'>THE MISSION</h1>
                        <p className='font-medium text-4xl text-left'>At the heart of everything, we set out to offer the best quality</p>
                    </div>
                </div>
                <div className='absolute right-0 top-1/2 transform -translate-y-1/2 text-center w-1/4'>
                    <div className='text-xl font-bold text-white text-left mr-24'>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus aspernatur, nisi quidem commodi autem labore minima reprehenderit accusantium ab nesciunt voluptates maxime eos vel dicta, odio ullam earum deleniti!</h1>
                        <h1 className='mt-2'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aperiam reiciendis cupiditate! Veritatis aperiam unde consectetur excepturi animi rem quod?
                        </h1>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About