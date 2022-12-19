import React from 'react'
import HeroSection from './components/HeroSection'

function Home() {
  const data = {
    name: "thapa store",
  };
  return (
    <div>afsfa
      <HeroSection myData={data} />
    </div>
  )
}

export default Home