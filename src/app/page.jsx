import React from 'react'
import MainProducts from './component/MainProducts'

export default function Home() {
  return (
    <main>
      <h1 className='font-bold  flex justify-center'>Our Story</h1>
      <h2>Shop with style</h2>

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
