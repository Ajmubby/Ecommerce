import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import products from '../../Shop/Shopped'

export default function ProductSection() {
  return (
    <section className='md:w-[75%] w-[90%] mx-auto'>
      <div className='grid grid-cols-3 md:gap-0 gap-10 py-20'>
         
          <div className='md:col-span-1 col-span-3 '>
            <Link href='/Shop'>
                <Image src='/mockup-free-lotion.png' width={400} height={300} className='bg-zinc-200 hover:'/>
                <p className='hover:text-red-400 text-xl'>Ómóluabi Lotion</p>
            </Link>
          </div>
          <div className='md:col-span-1 col-span-3 '>
            <Link href='/Shop'>
                <Image src='/n5chanel-perfume.png' width={400} height={300} className='bg-zinc-400'/>
                <p className='hover:text-red-400 text-xl'>Ómóluabi Perfume</p>            </Link>
          </div>
          <div className='md:col-span-1 col-span-3 '>
            <Link href='/Shop'>
                <Image src='/organic-activated-charcoal.png' width={400} height={300} className='bg-zinc-200'/>
                <p className='hover:text-red-400 text-xl'>Ómóluabi Skin-Care</p>           
            </Link>
          </div>
      </div>
    </section>
  )
}