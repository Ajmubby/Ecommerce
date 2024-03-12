import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import products from '../../Shop/Shop'

export default function ProductSection() {
  return (
    <section className='md:w-[75%] w-[90%] mx-auto'>
      <div className='grid grid-cols-3 md:gap-0 gap-10 py-20'>
          <div className='md:col-span-1 col-span-3 bg-zinc-200'>
            <Link href='/'>
                <Image src='/Ómóluabi-men-tools.png' width={400} height={300}/>
                <p>{products.title}</p>
            </Link>
          </div>
          <div className='md:col-span-1 col-span-3 bg-zinc-300 '>
            <Link href='/'>
                <Image src='/n5chanel-perfume.png' width={400} height={300}/>
            </Link>
          </div>
          <div className='md:col-span-1 col-span-3 bg-zinc-200'>
            <Link href='/'>
                <Image src='/organic-activated-charcoal.png' width={400} height={300}/>
            </Link>
          </div>
      </div>
    </section>
  )
}