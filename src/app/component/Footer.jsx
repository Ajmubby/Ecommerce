"use client"
import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'
import { FaGithub } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { CiPaperplane } from "react-icons/ci";



export default function Footer() {
  return (
    <footer className={`min-h-[40vh] bg-gray-200 ${styles.footer}`}>

        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 px-28 py-20'>
            <section>
                <h2 className='text-3xl'><Link href='/'>Ómóluabi<sup>&trade;</sup></Link></h2>
                <ul>
                    <li>
                        <p className='text-slate-500 w-[25ch]'>&copy; 2024 design and developed by <Link href='/' className='text-red-400'>Mubarak.</Link> Powered by <Link href='/' className='text-red-400'>Masculine.</Link></p>
                    </li>
                    
                </ul>
            </section>
            <section>
                <ul>
                    <li className='text-slate-500 pt-6'>
                        <address >No. 654 - Ogunlana Drive, <br /> 24b Surulere, Lagos, Nigeria. <br /> <Link href='/'>ajuwonmubarak4@gmail.com</Link> <br /> +2349070874182</address>
                        
                    </li>
                    
                </ul>
            </section>
            <section>
                <h2>GET 32% OFF</h2>
                <ul>
                    <li>
                        <p className='text-slate-600 '>By subscribe to our newsletter</p>
                    </li>
                    <form className='flex relative pt-2'>
                        <input type="email" name="enter email" id="email" placeholder='Enter your Email' className='w-[300px] h-[32px] px-2 rounded-full border-solid '/>
                        <button className='z-50 ml-[-20px]'><CiPaperplane/></button>

                    </form>
                    
                </ul>
            </section>
            <section>
                    <h2>Follow Us</h2>
                <ul className='pt-10 ml-2'>
                    <li className='space-x-4'>
                        <Link href='https://github.com/Ajmubby'>
                            <span><FaGithub /></span>
                        </Link>

                        <Link href='/'>
                            <span><SlSocialInstagram /></span>
                        </Link>

                        <Link href='https://twitter.com/AjMubby'>
                            <span><RiTwitterXFill /></span>
                        </Link>
                        <Link href=''>
                            <span><FaLinkedin /></span>
                        </Link>
                    </li>
                    
                </ul>
            </section>
        </div>
    </footer>
  )
}
