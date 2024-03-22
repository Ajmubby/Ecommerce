import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LatestNews() {
  return (
    <section className='mb-16 md:w-[75%] w-[70%] mx-auto'>
        <div className='md:w-1/7 w-full  mx-auto'>
            <h1 className='flex justify-center leading-5 font-extrabold text-4xl'>Latest News</h1>
        

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10'>
            <div>
                <Link href='/Shop'>
                <Image src={'/lumin-bg.jpg'} alt='Facials' width={300} height={300}/>
                <h2 className='text-slate-400'>By <span className='text-red-500'>Ade </span>  / Mar 2024</h2>
                <p className='font-semibold text-xl'>Explore our Natural Skincare Products</p>
                <p>These Skincare Works for any kind of Skin</p>
                </Link>
            </div>

            <div>
                <Link href='/Shop'>
                    <Image src={'/gabriella-clare-bg.jpg'} alt='Facials' width={300} height={300}/>
                    <h2 className='text-slate-400'>By <span className='text-red-500'>Mubarak </span>  / Mar 19 2024</h2>
                    <p className='font-semibold text-xl'>Love Yourself</p>
                    <p>Ómóluabi Men's Care</p>
                </Link>
            </div>

            <div>
                <Link href='Shop'>
                    <Image src={'/safia-shakil.jpg'} alt='Facials' width={300} height={300}/>
                    <h2 className='text-slate-400'>By <span className='text-red-500'>Timi </span>  / Mar 19 2024</h2>
                    <p className='font-semibold text-xl'>Revitalizing Eye Cream</p>
                    <p>Ómóluabi Glow Boosting Cleanser</p>
                </Link>
            </div>
        </div>
        </div>
        
        
           
        
    </section> 
    )
}
