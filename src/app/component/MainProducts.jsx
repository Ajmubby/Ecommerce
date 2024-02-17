import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainProducts() {
  return (
    <>
    <div className='flex justify-center'>
      <Image src='/fabulous-bodyoil1.jpg' width={300} height={300}/>
      <Image src='/n5chanel-perfume.jpg' width={300} height={300}/>
      <Image src='/organic-activated-charcoal.jpg' width={300} height={300}/>
    </div>
    <div >
      <ul className='flex justify-center space-x-7 py-3'>
        <li>
          <Link href='/'>Latest products</Link>
        </li>
        <li>
          <Link href='/'>Featured products</Link>
        </li>
        <li>
          <Link href='/'>Special products</Link>
        </li>
      </ul>
    </div>
    
    </>
    
  )
}
