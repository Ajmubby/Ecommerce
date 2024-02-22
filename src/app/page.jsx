import React from 'react'
import MainProducts from './component/MainProducts'

export default function Home() {
  return (
    <main>
      <h1 className='font-extrabold  flex justify-center'>Our Story</h1>
      <h2 className=' text-center px-56'>At Ómóluabi, we believe that skincare is not just about looking good; it's about feeling confident in your own skin. Inspired by the rich cultural heritage of Africa and the timeless wisdom of its traditions, Ómóluabi is more than just a skincare brand; it's a celebration of masculinity, authenticity, and self-care.</h2>

      <div>
        <ul>
          <li>
            <MainProducts/>
          </li>
        </ul>
      </div>
    </main>
  )
}
