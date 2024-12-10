import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function LatestProductSection() {
    
  return (
    <section className='mb-3 md:w-[75%] w-[90%] mx-auto'>
        <div>
            <ul className='flex justify-center space-x-7 py-3 text-xl'>
                <li><Link href='/'>Latest products</Link></li>
                <li><Link href='/'>Featured products</Link></li>
                <li><Link href='/'>Special products</Link></li>
            </ul>
        </div>
        
        <div className='grid grid-cols-4 place-items-center gap-6 space-y-2 leading-5'>
            <div className='lg:col-span-1 md:col-span-2 col-span-4'>
                <Link href='/Shop'>
                    <Image src = '/neauthy-skincare.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p className='text-slate-400'>Ómóluabi Face-Care</p>
                    <p>&#8358;2999.99</p>
                </Link>
            </div>

            <div className='lg:col-span-1 md:col-span-2 col-span-4'>
                <Link href='/Shop'>
                    <Image src='/pure-solution.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p className='text-slate-400'>Ómóluabi Pure-Solution Perfume</p>
                    <p>&#8358;3999.99</p>
                </Link>
            </div>

            <div className='lg:col-span-1 md:col-span-2 col-span-4'>
                <Link href='/Shop'>
                    <Image src='/necessaire-lotion.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p className='text-slate-400'>Ómóluabi Necessaire-lotion</p>
                    <p>&#8358;2999.99</p>
                </Link>
            </div>

            <div className='lg:col-span-1 md:col-span-2 col-span-4 '>
                <Link href='/Shop'>
                    <Image src='/boss-perfume.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p className='text-slate-400'>Ómóluabi Boss-Perfume</p>
                    <p>&#8358;2555.99</p>
                </Link>
            </div>

            <div className='lg:col-span-1 md:col-span-2 col-span-4 '>
                <Link href='/Shop'>
                    <Image src='/beard-oil.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p className='text-slate-400'>Ómóluabi Beards Oil</p>
                    <p>&#8358;4999.99</p>
                </Link>
            </div>
            
            <div className='lg:col-span-1 md:col-span-2 col-span-4 '>
                <Link href='/Shop'>
                    <Image src='/bakarat-perfume.png' width={300} height={300} className='h-72 w-72 bg-zinc-200'/>
                    <p className='text-slate-500'>Ómóluabi Bakarat-Perfume</p>
                    <p>&#8358;2499.99 <span className='line-through text-slate-500'>&#8358;4999.99</span></p> 
                </Link>
            </div>
        </div>
    </section>

  )
}
