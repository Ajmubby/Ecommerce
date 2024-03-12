"use client"
import { useState } from "react"
import { IoIosSearch } from "react-icons/io"


export default function Search() {
  const [sort, setSort] = useState('')




  return (
    <div className="flex items-center border-4 border-gray-600 rounded-full m-auto w-1/2 p-4">
       <input type="text" name='text' id='text' placeholder='search for products or category' className='outline-none border-none pl-8 w-5/6'
      />
      <IoIosSearch/>
    </div>
  )
}
