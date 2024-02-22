import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoIosSearch } from 'react-icons/io'

export default function LeftNavBig({open, sort, search}) {
  return (
<ul className={open ? 'md:flex hidden items-center w-full bg-gray-200 h-[100px] justify-center gap-6' : 'hidden'}>
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
        
            <form className='flex relative'>
                <input type="search" alt='search' id='search' placeholder='search...' className='w-[200px] h-[30px] px-2 rounded-full border-solid outline-none '/>
                <button className=' z-50 ml-[-20px] '><IoIosSearch sort={sort} search={search}/> </button>      
            </form>
</ul>
        
            
            )
}
