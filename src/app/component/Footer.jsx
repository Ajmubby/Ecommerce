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
    <footer className={`h-[40vh] bg-gray-200 ${styles.footer}`}>

        <div className='flex items-start'>
            <section>
                <h2 className='text-3xl'><Link href='/'>Ómóluabi</Link></h2>
                <ul>
                    <li>
                        <p className='text-slate-500 pt-3'>&copy; 2022 design and developed by <Link href='/' className='text-red-400'>Mubarak.</Link> Powered by <Link href='/' className='text-red-400'>Masculine.</Link></p>
                    </li>
                    
                </ul>
            </section>
            <section>
                <ul>
                    <li>
                        <p className='text-slate-500 pt-5'>No. 654 - Ogunlana Drive,24b Lagos, Nigeria. ajuwonmubarak4@gmail.com  +2349070874182</p>
                        <p></p>
                        <p></p>
                    </li>
                    
                </ul>
            </section>
            <section>
                <h2>GET 32% OFF</h2>
                <ul>
                    <li>
                        <p className='text-slate-500 pt-3'>By subscribe to our newsletter</p>
                    </li>
                    <form>
                        <input type="email" name="enter email" id="email" placeholder='Enter your Email' className='border rounded-xl px-7 mx-6 mt-3 ml-0'/>
                    </form>
                    
                </ul>
            </section>
            <section>
                <h2>Follow Us</h2>
                <ul>
                    <li>
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
        <div>

        </div>
    </footer>
  )
}
