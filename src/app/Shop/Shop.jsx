"use client"
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const products = [
  {
    id: 1,
    title: "Aveeno Lotion",
    category: "Lotion",
    price: 19.99,
    image: "aveeno-lotion.png",
    description: [
      "Cleanse and refresh your skin with our Aveeno Lotion .",
      "Formulated with gentle ingredients, this lotion effectively moisturise the skin, oil, and impurities without stripping the skin's natural moisture.",
      "Experience a revitalizing cleanse that leaves your skin feeling refreshed, balanced, and ready for the day ahead.",
      "Suitable for all skin types.",
      "Size: 150ml"
    ],
    tags: ["Facial cleanser", "Ómóluabi skincare", "Cleansing gel", "Skin care"]
  },
  {
    id: 2,
    title: "Bakarat Perfume",
    category: "Perfume",
    price: 24.99,
    image: "bakarat-perfume.png",
    description: [
      "Wear one of the best fragrances with our Bakarat.",
      "Enriched with hydrating ingredients like hyaluronic acid and vitamin E, this cream replenishes moisture, leaving your skin soft, smooth, and supple.",
      "Say goodbye to dryness and hello to healthy, glowing skin with daily use of this luxurious moisturizer.",
      "For best results, apply morning and night after cleansing.",
      "Size: 100ml"
    ],
    tags: ["Moisturizer", "Ómóluabi skincare", "Hydrating cream", "Skin hydration"]
  },
  {
    id: 3,
    title: "Ómóluabi Beards oil",
    category: "Face-care",
    price: 29.99,
    image: "beard-oil.png",
    description: [
      "Turn back the clock with our Ómóluabi Beards oil .",
      "Formulated with powerful antioxidants and peptides, this serum targets fine lines, wrinkles, and other signs of aging, leaving your skin looking youthful and radiant.",
      "Experience firmer, smoother, and more resilient skin with continued use of this advanced anti-aging treatment.",
      "Ideal for mature skin or those concerned about aging.",
      "Size: 30ml"
    ],
    tags: ["Anti-aging serum", "Ómóluabi skincare", "Youthful skin", "Age-defying"]
  },
  {
    id: 4,
    title: "Blu De Chanel",
    category: "Perfume",
    price: 17.99,
    image : "bluedechanel.png",
    description: [
      "Wear one of the best fragrances our Blu De Chanel.",
      "Infused with natural exfoliants like apricot kernels and jojoba beads, this scrub gently buffs away dead skin cells, revealing smoother, brighter, and more refined skin.",
      "Achieve a more even tone and texture with regular exfoliation, suitable for all skin types.",
      "For best results, use 2-3 times per week as part of your skincare routine.",
      "Size: 120ml"
    ],
    tags: ["Exfoliating scrub", "Ómóluabi perfume", "Facial scrub", "Scent renewal"]
  },
  {
    id: 5,
    title: "Ómóluabi Boss",
    category: "Perfume",
    price: 14.99,
    image: "boss-perfume.png",
    description: [
      "Wear one of the best fragrances with our Ómóluabi Boss.",
      "Formulated with natural botanical extracts and witch hazel, this toner gently tones and clarifies the skin, removing excess oil and impurities without over-drying.",
      "Experience a fresh, revitalized complexion with each use, suitable for daily use on all skin types.",
      "For best results, apply to cleansed skin with a cotton pad or spray directly onto the face.",
      "Size: 200ml"
    ],
    tags: ["Facial toner", "Ómóluabi perfume", "Skin balancing", "Toning mist"]
  },
  {
    id: 6,
    title: "Bvlgari",
    category: "Perfume",
    price: 21.99,
    image: "Bvlgariperfume.png",
    description: [
      "Wear one of the best fragrances with our Ómóluabi Boss.",
      "Enriched with moisture-binding ingredients like hyaluronic acid and aloe vera, this mask delivers intense hydration, leaving your skin plump, dewy, and radiant.",
      "Revitalize tired, dull-looking skin and restore its natural glow with this luxurious treatment, suitable for all skin types.",
      "For best results, apply a generous layer to cleansed skin and leave on for 10-15 minutes before rinsing.",
      "Size: 50ml"
    ],
    tags: ["Hydrating mask", "Ómóluabi perfume", "Moisture boost", "Skin hydration"]
  },
  {
    id: 7,
    title: "neauthy-skincare",
    category: "Face-care",
    image: "neauthy-skincare.png",
    price: 16.99,
    description: [
      "Soothe and calm your skin post-shave with our best selling Face cream.",
      "Formulated with soothing botanicals like chamomile and aloe vera, this balm helps reduce redness, irritation, and razor burn, leaving your skin feeling comfortable and refreshed.",
      "Hydrate and nourish your skin with lightweight, non-greasy formula, suitable for all skin types.",
      "For best results, apply to freshly shaved skin and massage gently until absorbed.",
      "Size: 100ml"
    ],
    tags: ["Face care", "Ómóluabi skincare", "Soothing formula", "Post-shave care"]
  },
  {
    id: 8,
    title: "lumin-balm",
    category: "Face-care",
    image: "lumin-balm.jpg",
    price: 27.99,
    description: [
      "Awaken tired eyes with our Soothing Aftershave Balm.",
      "Enriched with brightening agents and peptides, this cream targets dark circles, puffiness, and fine lines around the delicate eye area, leaving you with a more youthful, refreshed appearance.",
      "Hydrate, firm, and revitalize the skin around your eyes with this lightweight, fast-absorbing formula, suitable for all skin types.",
      "For best results, gently pat a small amount around the eye area morning and night.",
      "Size: 15ml"
    ],
    tags: ["Aftershave balm", "Ómóluabi skincare", "Dark circle treatment", "Eye care"]
  },
  {
    id: 9,
    title: "necessaire-lotion",
    category: "Lotion",
    image : "necessaire-lotion.png",
    price: 22.99,
    description: [
      "Protect your skin from harmful UV rays with our necessaire-lotion.",
      "Formulated with broad-spectrum SPF 50 and antioxidants, this sunscreen provides high-level protection against sunburn, premature aging, and skin damage caused by UV exposure.",
      "Lightweight, non-greasy, and fast-absorbing formula suitable for daily use, even under makeup.",
      "Water-resistant for up to 80 minutes, ideal for outdoor activities and sports.",
      "Size: 100ml"
    ],
    tags: ["Sunscreen", "Ómóluabi skincare", "SPF 50 protection", "Sun protection"]
  },
  {
    id: 10,
    title: "organic-activated-charcoal",
    category: "Face-care",
    image: "organic-activated-charcoal.png",
    price: 18.99,
    description: [
      "Soothe and hydrate sun-exposed skin with our organic-activated-charcoal.",
      "Enriched with cooling menthol and aloe vera, this lightweight gel provides instant relief from sunburn, redness, and inflammation, leaving your skin feeling calm, refreshed, and hydrated.",
      "Replenish moisture and restore balance to your skin after sun exposure with this fast-absorbing, non-sticky formula, suitable for all skin types.",
      "For best results, apply liberally to affected areas and reapply as needed.",
      "Size: 150ml"
    ],
    tags: ["Aftersun gel", "Ómóluabi skincare", "Cooling relief", "Sun care"]
  },
  {
    id: 11,
    title: "pure-solution",
    category: "Perfume",
    image : "pure-solution.png",
    price: 20.99,
    description: [
      "Achieve a flawless, shine-free complexion with our Pure-solution perfume.",
      "Formulated with oil-absorbing ingredients and mattifying powders, this primer helps minimize the appearance of pores, control excess oil, and extend the wear of your makeup.",
      "Create a smooth, matte canvas for makeup application and enjoy long-lasting results throughout the day, suitable for all skin types.",
      "For best results, apply a pea-sized amount to clean, moisturized skin before makeup.",
      "Size: 30ml"
    ],
    tags: ["Smell Fresh", "Ómóluabi Perfume", "Matte finish", "Makeup base"]
  },
  {
    id: 12,
    title: "Ómóluabi-men's-tools",
    category: "Face-care",
    image : "Ómóluabi-men-tools.png",
    price: 15.99,
    description: [
      "Invigorate your senses with our Ómóluabi-men's-tools.",
      "Enriched with botanical extracts and revitalizing scents, this body wash gently cleanses and refreshes your skin, leaving you feeling clean, hydrated, and energized.",
      "Experience a luxurious lather and indulge in the refreshing fragrance of JavaScript, suitable for daily use.",
      "For best results, lather onto wet skin, massage gently, and rinse thoroughly.",
      "Size: 250ml"
    ],
    tags: ["Men's Care", "Ómóluabi skincare", "Stay Fresh", "Face care"]
  },
  {
    id: 13,
    title: "clarin-bodylotion",
    category: "Lotion",
    image : "clarin-bodylotion.png",
    price: 18.99,
    description: [
      "Nourish and hydrate your skin with our Clarin Nourishing Body Lotion.",
      "Infused with moisturizing ingredients like shea butter and coconut oil, this lotion deeply nourishes and softens dry, rough skin, leaving it smooth, supple, and hydrated.",
      "Lock in moisture and protect your skin's natural barrier with this lightweight, non-greasy formula, suitable for daily use.",
      "For best results, apply generously to clean, dry skin after bathing or showering.",
      "Size: 200ml"
    ],
    tags: ["Body lotion", "Ómóluabi skincare", "Moisturizing cream", "Body hydration"]
  },
  {
    id: 14,
    title: "the-ritual-of-sakula",
    category: "Lotion",
    image : "the-ritual-of-sakula.png",
    price: 12.99,
    description: [
      "Revitalize dry, rough hands with our the-ritual-of-sakula body lotion.",
      "Enriched with nourishing botanicals and vitamins, this hand cream deeply hydrates and softens hands, restoring smoothness and elasticity.",
      "Protect your hands from environmental damage and premature aging with this fast-absorbing, non-greasy formula, suitable for daily use.",
      "For best results, apply liberally to clean, dry hands as needed, especially after washing.",
      "Size: 100ml"
    ],
    tags: ["Hand cream", "Ómóluabi skincare", "Moisturizing body lotion", "Skin care"]
  },
  {
    id: 15,
    title: "Ómóluabi Calm",
    category: "Face-care",
    image: "Calm-face-care.png",
    price: 26.99,
    description: [
      "Refresh and invigorate your senses with our Ómóluabi Calm.",
      "Infused with a burst of citrus, mint, and woody notes, this body spray offers a refreshing and long-lasting fragrance that keeps you feeling confident and energized throughout the day.",
      "Spritz onto your body for an instant boost of freshness, suitable for daily use.",
      "Size: 150ml",
      "Ideal for on-the-go freshness and post-workout refreshment."
    ],
    tags: ["Sunscreen", "Ómóluabi skincare", "SPF 50 protection", "Sun protection"]
  }
];

export default function Products() {
  const [sort, setSort] = useState('')

  function searchProducts(){
    setSort(e.target.value)
  }
        
        
          const filteredList = products.filter(topics => topics.title.toLowerCase().includes(sort.toLowerCase()) || topics.category.toLowerCase().includes(sort.toLowerCase()))

          const productsCart =
          filteredList.length == 0 ? <h2>No item found</h2> :


          filteredList.map( cart => (
            <section key={cart.id} className='px-14 py-3'>
              <Link href={`/category/${cart.title.split(' ').join('-')}`}>
                  <Image src={`/${cart.image}`} alt={cart.title} width={300} height={300} className='h-72 w-72 rounded-sm bg-zinc-200'/>
                  <h2>{cart.title.toUpperCase()}</h2>
                  <p>&#8358; <span>{cart.price}</span></p>
              </Link>

            </section>
          )


          )

          
                    
  return (
    <>
    <article className='h-100'>
        <nav className='h-60 bg-gray-200 flex justify-center'>
       <ul>
        <h1 className='font-bold text-6xl py-6 mx-5'>Offical Stores</h1>
        <aside className='flex justify-between px-20 py-4'>
        <li className='text-stone-400 text-xl'><Link href="/">Home</Link></li><p className='text-xl'>•</p>
        <li className='text-xl'><Link href="/contact">Shop</Link></li>
        </aside>
       </ul>
        </nav>
        </article>
    <div className='flex items-center border-4 border-gray-600 rounded-full m-auto w-1/3 p-4 leading-4'>

      <input type="text" name='text' id='text' placeholder='search for products or category' className='outline-none border-none pl-8 w-5/6 mt-2'
      defaultValue={sort}
      onChange={searchProducts}
      />
      <IoIosSearch/>
      
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

      {productsCart}
    </div>
    </>

  )
}
