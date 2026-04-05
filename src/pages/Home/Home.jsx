import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import MomoCard from '../../components/MomoCard'
const Home = () => {
  return (
    <div className='homepage'>
       <Navbar/>
       <Hero />
       <MomoCard/>
    </div>
  )
}

export default Home;