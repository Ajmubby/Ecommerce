"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { TfiShoppingCart } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { IoAddSharp } from "react-icons/io5";
import Rightnav from './Rightnav';
import LeftNavBig from './LeftNavBig';
import LeftNavSmall from './LeftNavSmall';



export default function Navbar(sort,search) {
    const [cart, setCart] = useState(0)
    
    const [open, setOpen] = useState(true)

    function controlNav(){
        setOpen(!open)
    }
    
    function addOne(){
        setCart(prev => prev + 1)
    }

  return (
   
    <nav className='flex  justify-end py-8 bg-zinc-200 px-24'>
        {open ? 
    <LeftNavBig open={open} sort={sort} search={search}/>
    :
    <LeftNavSmall sort={sort} search={search}/>
    }
        
        <Rightnav open={open} controlNav={controlNav} cart={cart}/>
    </nav>
  )
}
