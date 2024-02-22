"use client"
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Topics() {
  const [sort, setSort] = useState('')

  function searchTopic(){
    setSort(e.target.value)
  }
        const products = [
            {
              id: 1,
              title: "HTML Facial Cleanser",
              category: "Face care",
              price: 19.99,
              description: [
                "Cleanse and refresh your skin with our HTML Facial Cleanser.",
                "Formulated with gentle ingredients, this cleanser effectively removes dirt, oil, and impurities without stripping the skin's natural moisture.",
                "Experience a revitalizing cleanse that leaves your skin feeling refreshed, balanced, and ready for the day ahead.",
                "Suitable for all skin types.",
                "Size: 150ml"
              ],
              tags: ["Facial cleanser", "HTML skincare", "Cleansing gel", "Skin care"]
            },
            {
              id: 2,
              title: "CSS Moisturizing Cream",
              category: "Face care",
              price: 24.99,
              description: [
                "Hydrate and nourish your skin with our CSS Moisturizing Cream.",
                "Enriched with hydrating ingredients like hyaluronic acid and vitamin E, this cream replenishes moisture, leaving your skin soft, smooth, and supple.",
                "Say goodbye to dryness and hello to healthy, glowing skin with daily use of this luxurious moisturizer.",
                "For best results, apply morning and night after cleansing.",
                "Size: 100ml"
              ],
              tags: ["Moisturizer", "CSS skincare", "Hydrating cream", "Skin hydration"]
            },
            {
              id: 3,
              title: "JavaScript Anti-Aging Serum",
              category: "Face care",
              price: 29.99,
              description: [
                "Turn back the clock with our JavaScript Anti-Aging Serum.",
                "Formulated with powerful antioxidants and peptides, this serum targets fine lines, wrinkles, and other signs of aging, leaving your skin looking youthful and radiant.",
                "Experience firmer, smoother, and more resilient skin with continued use of this advanced anti-aging treatment.",
                "Ideal for mature skin or those concerned about aging.",
                "Size: 30ml"
              ],
              tags: ["Anti-aging serum", "JavaScript skincare", "Youthful skin", "Age-defying"]
            },
            {
              id: 4,
              title: "HTML Exfoliating Scrub",
              category: "Face care",
              price: 17.99,
              description: [
                "Revitalize your complexion with our HTML Exfoliating Scrub.",
                "Infused with natural exfoliants like apricot kernels and jojoba beads, this scrub gently buffs away dead skin cells, revealing smoother, brighter, and more refined skin.",
                "Achieve a more even tone and texture with regular exfoliation, suitable for all skin types.",
                "For best results, use 2-3 times per week as part of your skincare routine.",
                "Size: 120ml"
              ],
              tags: ["Exfoliating scrub", "HTML skincare", "Facial scrub", "Skin renewal"]
            },
            {
              id: 5,
              title: "CSS Refreshing Toner",
              category: "Face care",
              price: 14.99,
              description: [
                "Restore balance to your skin with our CSS Refreshing Toner.",
                "Formulated with natural botanical extracts and witch hazel, this toner gently tones and clarifies the skin, removing excess oil and impurities without over-drying.",
                "Experience a fresh, revitalized complexion with each use, suitable for daily use on all skin types.",
                "For best results, apply to cleansed skin with a cotton pad or spray directly onto the face.",
                "Size: 200ml"
              ],
              tags: ["Facial toner", "CSS skincare", "Skin balancing", "Toning mist"]
            },
            {
              id: 6,
              title: "JavaScript Hydrating Mask",
              category: "Face care",
              price: 21.99,
              description: [
                "Quench thirsty skin with our JavaScript Hydrating Mask.",
                "Enriched with moisture-binding ingredients like hyaluronic acid and aloe vera, this mask delivers intense hydration, leaving your skin plump, dewy, and radiant.",
                "Revitalize tired, dull-looking skin and restore its natural glow with this luxurious treatment, suitable for all skin types.",
                "For best results, apply a generous layer to cleansed skin and leave on for 10-15 minutes before rinsing.",
                "Size: 50ml"
              ],
              tags: ["Hydrating mask", "JavaScript skincare", "Moisture boost", "Skin hydration"]
            },
            {
              id: 7,
              title: "HTML Soothing Aftershave Balm",
              category: "Face care",
              price: 16.99,
              description: [
                "Soothe and calm your skin post-shave with our HTML Soothing Aftershave Balm.",
                "Formulated with soothing botanicals like chamomile and aloe vera, this balm helps reduce redness, irritation, and razor burn, leaving your skin feeling comfortable and refreshed.",
                "Hydrate and nourish your skin with lightweight, non-greasy formula, suitable for all skin types.",
                "For best results, apply to freshly shaved skin and massage gently until absorbed.",
                "Size: 100ml"
              ],
              tags: ["Aftershave balm", "HTML skincare", "Soothing formula", "Post-shave care"]
            },
            {
              id: 8,
              title: "CSS Brightening Eye Cream",
              category: "Face care",
              price: 27.99,
              description: [
                "Awaken tired eyes with our CSS Brightening Eye Cream.",
                "Enriched with brightening agents and peptides, this cream targets dark circles, puffiness, and fine lines around the delicate eye area, leaving you with a more youthful, refreshed appearance.",
                "Hydrate, firm, and revitalize the skin around your eyes with this lightweight, fast-absorbing formula, suitable for all skin types.",
                "For best results, gently pat a small amount around the eye area morning and night.",
                "Size: 15ml"
              ],
              tags: ["Eye cream", "CSS skincare", "Dark circle treatment", "Eye care"]
            },
            {
              id: 9,
              title: "JavaScript SPF 50 Sunscreen",
              category: "Face care",
              price: 22.99,
              description: [
                "Protect your skin from harmful UV rays with our JavaScript SPF 50 Sunscreen.",
                "Formulated with broad-spectrum SPF 50 and antioxidants, this sunscreen provides high-level protection against sunburn, premature aging, and skin damage caused by UV exposure.",
                "Lightweight, non-greasy, and fast-absorbing formula suitable for daily use, even under makeup.",
                "Water-resistant for up to 80 minutes, ideal for outdoor activities and sports.",
                "Size: 100ml"
              ],
              tags: ["Sunscreen", "JavaScript skincare", "SPF 50 protection", "Sun protection"]
            },
            {
              id: 10,
              title: "HTML Cooling Aftersun Gel",
              category: "Face care",
              price: 18.99,
              description: [
                "Soothe and hydrate sun-exposed skin with our HTML Cooling Aftersun Gel.",
                "Enriched with cooling menthol and aloe vera, this lightweight gel provides instant relief from sunburn, redness, and inflammation, leaving your skin feeling calm, refreshed, and hydrated.",
                "Replenish moisture and restore balance to your skin after sun exposure with this fast-absorbing, non-sticky formula, suitable for all skin types.",
                "For best results, apply liberally to affected areas and reapply as needed.",
                "Size: 150ml"
              ],
              tags: ["Aftersun gel", "HTML skincare", "Cooling relief", "Sun care"]
            },
            {
              id: 11,
              title: "CSS Mattifying Face Primer",
              category: "Face care",
              price: 20.99,
              description: [
                "Achieve a flawless, shine-free complexion with our CSS Mattifying Face Primer.",
                "Formulated with oil-absorbing ingredients and mattifying powders, this primer helps minimize the appearance of pores, control excess oil, and extend the wear of your makeup.",
                "Create a smooth, matte canvas for makeup application and enjoy long-lasting results throughout the day, suitable for all skin types.",
                "For best results, apply a pea-sized amount to clean, moisturized skin before makeup.",
                "Size: 30ml"
              ],
              tags: ["Face primer", "CSS skincare", "Matte finish", "Makeup base"]
            },
            {
              id: 12,
              title: "JavaScript Refreshing Body Wash",
              category: "Lotion",
              price: 15.99,
              description: [
                "Invigorate your senses with our JavaScript Refreshing Body Wash.",
                "Enriched with botanical extracts and revitalizing scents, this body wash gently cleanses and refreshes your skin, leaving you feeling clean, hydrated, and energized.",
                "Experience a luxurious lather and indulge in the refreshing fragrance of JavaScript, suitable for daily use.",
                "For best results, lather onto wet skin, massage gently, and rinse thoroughly.",
                "Size: 250ml"
              ],
              tags: ["Body wash", "JavaScript skincare", "Shower gel", "Body care"]
            },
            {
              id: 13,
              title: "HTML Nourishing Body Lotion",
              category: "Lotion",
              price: 18.99,
              description: [
                "Nourish and hydrate your skin with our HTML Nourishing Body Lotion.",
                "Infused with moisturizing ingredients like shea butter and coconut oil, this lotion deeply nourishes and softens dry, rough skin, leaving it smooth, supple, and hydrated.",
                "Lock in moisture and protect your skin's natural barrier with this lightweight, non-greasy formula, suitable for daily use.",
                "For best results, apply generously to clean, dry skin after bathing or showering.",
                "Size: 200ml"
              ],
              tags: ["Body lotion", "HTML skincare", "Moisturizing cream", "Body hydration"]
            },
            {
              id: 14,
              title: "CSS Revitalizing Hand Cream",
              category: "Lotion",
              price: 12.99,
              description: [
                "Revitalize dry, rough hands with our CSS Revitalizing Hand Cream.",
                "Enriched with nourishing botanicals and vitamins, this hand cream deeply hydrates and softens hands, restoring smoothness and elasticity.",
                "Protect your hands from environmental damage and premature aging with this fast-absorbing, non-greasy formula, suitable for daily use.",
                "For best results, apply liberally to clean, dry hands as needed, especially after washing.",
                "Size: 100ml"
              ],
              tags: ["Hand cream", "CSS skincare", "Moisturizing hand lotion", "Hand care"]
            },
            {
              id: 15,
              title: "JavaScript Refreshing Body Spray",
              category: "Perfume",
              price: 26.99,
              description: [
                "Refresh and invigorate your senses with our JavaScript Refreshing Body Spray.",
                "Infused with a burst of citrus, mint, and woody notes, this body spray offers a refreshing and long-lasting fragrance that keeps you feeling confident and energized throughout the day.",
                "Spritz onto your body for an instant boost of freshness, suitable for daily use.",
                "Size: 150ml",
                "Ideal for on-the-go freshness and post-workout refreshment."
              ],
              tags: ["Body spray", "JavaScript fragrance", "Refreshing scent", "Perfume"]
            }
          ];
        
          const filteredList = products.filter(topics => topics.title.toLowerCase().includes(sort.toLowerCase()) || topics.category.toLowerCase().includes(sort.toLowerCase()))

          const productsCart =
          filteredList.length == 0 ? <h2></h2> :


          filteredList.map( cart => (
            <section key={cart.id}>
              <Link href='/'>
                  <Image src={`/${cart.image}`} alt={cart.title} width={300} height={300}/>
                  <h2>{cart.title}</h2>
              </Link>

            </section>
          )


          )

          
                    
  return (
    <div>
      {productsCart}
    </div>
  )
}
