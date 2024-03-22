"use client"
import React from 'react'
import { products } from '../Shopped'
import Image from 'next/image'
import Link from 'next/link'

export default function page({params}) {
    const productCard = products.find((items) => items.title.split(" ").join('-') == params.slug)

    const relatedItems = products.filter((items) => items.category == productCard.category && items.title !== productCard.title
    ).slice(0, 3).sort((a, b) => b.price - a.price);

    const relatedCategory = relatedItems.map((items) => (
        <section key={items.id}
        className='mx-auto my-auto mt-6 px-4'>
            <Link href={`/Shop/${items.title.split(" ").join("-")}`}>
                <div>
                    <Image src={`/${items.image}`} alt={items.title} width={500} height={500}/>
                </div>
            </Link>
                <div>
                    <h2>{items.title}</h2>
                    <p>&#8358;<span>{items.price}</span></p>
                </div>
        </section>
        
    ))
    
   


    

  return (
    <>
    <div className='grid grid-cols-2 px-16'>
        <div className='md:col-span-1 col-span-2'>
            <Image src={`/${productCard.image}`} alt={productCard.title} width={300} height={300} />
        </div>
        <div className='md:col-span-1 col-span-2 py-20'>
            <h1>{productCard.title}</h1>
            <h2>{productCard.price}</h2>
            <p>{productCard.description}</p>
        </div>
        
    <div>
        <h2>Related Products</h2>
        <div className='grid grid-cols-3 gap-10'>
            <div className='md:col-span-1 col-span-2'>
                {relatedCategory}
            </div>
        </div>
    </div>
    </div>
    </>
        
  )
}
