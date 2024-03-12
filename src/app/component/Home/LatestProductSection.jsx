import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function LatestProductSection() {
    
  return (
    <section className='mb-3 md:w-[75%] w-[90%] mx-auto'>
        <div>
            <ul className='flex justify-center space-x-7 py-3'>
                <li><Link href='/'>Latest products</Link></li>
                <li><Link href='/'>Featured products</Link></li>
                <li><Link href='/'>Special products</Link></li>
            </ul>
        </div>
        
        <div className='grid grid-cols-4 place-items-center gap-6 space-y-2 leading-5'>
            <div className='lg:col-span-1 md:col-span-2 col-span-4'>
                <Link href='/'>
                    <Image src = '/Calm-face-care.jpg' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p>Face-Care</p>
                    <p>20.99</p>
                </Link>
            </div>

            <div className='lg:col-span-1 md:col-span-2 col-span-4'>
                <Link href='/'>
                    <Image src='/puresolution.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p>Face-Care</p>
                    <p>20.99</p>
                </Link>
            </div>

            <div className='lg:col-span-1 md:col-span-2 col-span-4'>
                <Link href='/'>
                    <Image src='/necessaire-lotion.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p>Face-Care</p>
                    <p>20.99</p>
                </Link>
            </div>

            <div className='lg:col-span-1 md:col-span-2 col-span-4 '>
                <Link href='/'>
                    <Image src='/boos-perfume.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p>Face-Care</p>
                    <p>20.99</p>
                </Link>
            </div>

            <div className='lg:col-span-1 md:col-span-2 col-span-4 '>
                <Link href='/'>
                    <Image src='/beard-oil.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p>Face-Care</p>
                    <p>20.99</p>
                </Link>
            </div>
            
            <div className='lg:col-span-1 md:col-span-2 col-span-4 '>
                <Link href='/'>
                    <Image src='/bakarat-perfume.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p>Face-Care</p>
                    <p>20.99</p>
                </Link>
            </div>
        </div>
    </section>

  )
}
