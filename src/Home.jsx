import React from 'react'
import Hero from './components/Hero'
import Sectioni from './components/Sectioni';
import Newsletters from './components/Newsletters'
import Cards from './components/Cards'


const Home = () => {
  return (
    <div>
        <Hero />
        <Sectioni/>
        <Newsletters/>
        <Cards/>
    </div>
  )
}

export default Home