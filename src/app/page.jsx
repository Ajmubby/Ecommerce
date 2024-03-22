import React from 'react'
import OurStory from './component/Home/OurStory'
import HomeHeroSection from './component/Home/HomeHeroSection'
import ProductSection from './component/Home/ProductSection'
import LatestProductSection from './component/Home/LatestProductSection'
import LatestNews from './component/Home/LatestNews'

export default function Home() {
  return (
    <main>
      <HomeHeroSection />
      <OurStory/>
      <ProductSection />
      <LatestProductSection />
      <LatestNews/>
    </main>
  )
}
