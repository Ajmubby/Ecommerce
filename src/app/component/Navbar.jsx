"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { TfiShoppingCart } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";




export default function Navbar() {
    const [cart, setCart] = useState(0)
    
    const [open, setOpen] = useState(true)

    function controlNav(){
        setOpen(!open)
    }

  return (
    <nav className='flex justify-between px-[2rem] py-8'>
        <ul className='flex items-start gap-4'>
            <li >
                <Link href='/'>
                    <Image src='/logo.png' width="32" height="32"  className='rounded-full'/>
                </Link>
            </li>
            <li>
                <Link href='/' className='flex flex-col text-center text-3xl'>
                <span>Ómóluabi</span>
                <span></span>
                </Link>
            </li>
        </ul>
        <div className='flex flex-col align-middle'>

        <ul className={`md:hidden ${open ? 'flex': 'hidden'} cursor-pointer`}>
            <li onClick={controlNav}>
                <GiHamburgerMenu  />
            </li>
        </ul>
        <ul className={`md:hidden ${open ? 'hidden': 'flex'} cursor-pointer`}>
            <li onClick={controlNav}>
                <RxCross2 />
            </li>
        </ul>

        <ul className={`md:flex  ${open ? 'hidden' : 'flex flex-col'} justify-center gap-6 pt-2`}>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/shop'>Shop</Link>
            </li>
            <li>
                <Link href='/page'>Page</Link>
            </li>
            <li>
                <Link href='/contact'>Contact</Link>
            </li>
            <li>
                <Link href='/cart' className='flex items-center gap-2'>
                    <TfiShoppingCart />
                    <span>{cart}</span>
                </Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}
