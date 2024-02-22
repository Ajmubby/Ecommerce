import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosSearch } from 'react-icons/io'

export default function LeftNavSmall({sort, search}) {
  return (
<ul className= 'flex fixed left-0 bottom-0 flex-col w-[40%] bg-gray-200 shadow-xl h-screen justify-start p-6 gap-6'>
            <li >
                <Link href='/'>
                    <Image src='/logo.png' width="32" height="32"  className='rounded-full'/>
                </Link>
            </li>
            <li>
                <Link href='/' className='flex flex-col text-center text-3xl'>
                <span>Ómóluabi<sup>&trade;</sup></span>
                <span></span>
                </Link>
            </li>

        
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/Shop'>Shop</Link>
            </li>
            <li>
                <Link href='/page'>Page</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
       
            <div className='flex relative'>
                <input type="search" alt='search' id='search' placeholder='search...' className='w-[200px] h-[30px] px-2 rounded-full border-solid outline-none '/>
                <button className=' z-50 ml-[-20px] '><IoIosSearch sort={sort} search={search}/> </button>      
            </div>
</ul>
        
            
            )
}
