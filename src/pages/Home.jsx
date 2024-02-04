import React from 'react'
import Welcome from '../components/Welcome'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='section-div-col tile-spacing-y'>
        <Welcome/>
        <Hero/>
    </div>

  )
}

export default Home