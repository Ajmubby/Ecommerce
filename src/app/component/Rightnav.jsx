import React from 'react'
import Link from 'next/link'
import { GoPerson } from 'react-icons/go'
import { IoAddSharp } from 'react-icons/io5'
import { TfiShoppingCart } from 'react-icons/tfi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'


export default function Rightnav({open,controlNav, cart, addOne}) {
  return (
    <div className='flex gap-6 justify-end items-center'>

                <div>
                    <Link href='/' className='text-xl'>
                        <GoPerson/>
                    </Link>
                </div>
                <ul className='flex items-center'>
                    <li onClick={addOne}>
                        <IoAddSharp/>
                    </li>
                </ul>
                <div>
                    <Link href='/cart' className='flex items-center gap-1'>
                        <TfiShoppingCart />
                        <span>{cart}</span>
                    </Link>
                </div>
            <ul className={`md:hidden ${open ? 'flex': 'hidden'} cursor-pointer`}>
                <li onClick={controlNav}>
                    <GiHamburgerMenu  />
                </li>
            </ul>
            <div className={`md:hidden ${open ? 'hidden': 'flex'} cursor-pointer`}>
                <li onClick={controlNav}>
                    <RxCross2 />
                </li>
            </div>
        </div>

  )
}
