"use client"
import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
import { FaGithub } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className={`h-[40vh] bg-gray-200 ${styles.footer} space-x-20`}>

        <div className='flex items-start'>
            <section>
                <h2 className='text-3xl'><Link href='/'>Ómóluabi</Link></h2>
                <ul>
                    <li>
                        <p className='text-slate-500 '>&copy; 2024 design and developed <br /> by <Link href='/' className='text-red-400'>Mubarak. <br /></Link> Powered by <Link href='/' className='text-red-400'>Masculine.</Link></p>
                    </li>
                    
                </ul>
            </section>
            <section>
                <ul>
                    <li className='text-slate-500 pt-6'>
                        <p >No. 654 - Ogunlana Drive, <br /> 24b Lagos, Nigeria. <br /> ajuwonmubarak4@gmail.com <br /> +2349070874182</p>
                        
                    </li>
                    
                </ul>
            </section>
            <section>
                <h2>GET 32% OFF</h2>
                <ul>
                    <li>
                        <p className='text-slate-600 '>By subscribe to our newsletter</p>
                    </li>
                    <form className='mr-3'>
                        <input type="email" name="enter email" id="email" placeholder='Enter your Email' className='border rounded-full px-1 mx-1 mt-3 pt-2 pb-2 mr-24 w-[300px] h-[30px]'/>
                    </form>
                    
                </ul>
            </section>
            <section>
                    <h2>Follow Us</h2>
                <ul className='pt-10 ml-10'>
                    <li className='space-x-4'>
                        <Link href='/'>
                            <span><FaGithub /></span>
                        </Link>

                        <Link href='/'>
                            <span><SlSocialInstagram /></span>
                        </Link>

                        <Link href='/'>
                            <span><RiTwitterXFill /></span>
                        </Link>
                        <Link href='/'>
                            <span><FaLinkedin /></span>
                        </Link>
                    </li>
                    
                </ul>
            </section>
        </div>
    </footer>
  )
}
