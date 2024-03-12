"use client"
import { useState } from 'react';
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
