"use client"
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { useState } from 'react';
import Link from 'next/link';


export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (task) => { task.preventDefault();
    setEmail("");
    setName("");
    setMessage("");
    alert (`Name: ${name} Message: ${message} Email: ${email}`);

  };
  return (
    <div>
        <article className='h-100'>
        <nav className='h-60 bg-gray-200 flex justify-center'>
       <ul>
        <h1 className='font-bold text-6xl py-6 mx-5'>Contact US</h1>
        <aside className='flex justify-between px-20 py-4'>
        <li className='text-stone-400 text-xl'><Link href="/">Home</Link></li><p className='text-xl'>•</p>
        <li className='text-xl'><Link href="/contact">Contacts</Link></li>
        </aside>
       </ul>
        </nav>
        </article>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 px-8'>
    <section className='px-5 py-20'>
        <h1 className='font-bold text-2xl'>Contact US</h1>
        <article>
        <address className='text-stone-400 pt-2'>
        No. 654 - Ogunlana Drive, 24b Surulere, Lagos, Nigeria.<br />
        <br />
        </address>
        <Link href="tel:+2349070874182" className='text-black font-bold text-xl'>+234 9070874182</Link> <br />
        <br />
        
        <aside className='flex items-center gap-1'>
        <span className='text-red-400'> <BsEnvelope /></span><a href="ajuwonmubarak4@gmail.com" className='text-stone-400 hover:text-black'>ajuwonmubarak4@gmail.com</a> 
        <br />
        </aside>
        <div className='flex gap-3 text-stone-400 py-4 text-2xl'>
          <Link href='https://github.com/Ajmubby'>
            <span className=' bg-stone-200 rounded-full'><FaGithub/></span>
          </Link>
          
          <Link href='/'>
            <span className=' bg-stone-200 rounded-full'><SlSocialInstagram/></span>
          </Link>

          <Link href='https://twitter.com/AjMubby'>
            <span className=' bg-stone-200 rounded-full'><RiTwitterXFill/></span>
          </Link>

          <Link href='https://www.linkedin.com/in/mubarak-ajuwon/'>
            <span className=' bg-stone-200 rounded-full'><FaLinkedin/></span>
          </Link>
        </div>
        </article>
    </section>

    <section className=' py-20 mr-10'>
  
        <h1 className='font-bold text-2xl' >Drop Us a Message</h1>
        <p className='py-5'>Have a question or feedback? Fill out the form below to get in touch with us.</p>
        
        <form className='flex flex-col gap-3 w-[100]'>
          <span className='flex gap-4'>
          <input className='border-2 rounded-lg border-stone-400 py-4 placeholder:p-4 placeholder:mx-4 text-stone-400 w-1/2' type="text" id="name" name="name"  placeholder='Your Name'required />
            
            <input className='border-2 rounded-lg border-stone-400 placeholder:p-4 text-stone-400 w-1/2' type="email" id="email" name="email"  placeholder='Your Email'required /></span> 
            
            
            <textarea className=' border-2 rounded-lg border-stone-400 py-20 placeholder:px-5 placeholder:py-[-20]  text-stone-400' id="message" name="message" placeholder='Example Text' required></textarea>
            
            <button className='border rounded-xl bg-zinc-500 text-black my-5 py-2 w-2/5 font-bold' type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </section>
        </div>
    </div>
  )
}
