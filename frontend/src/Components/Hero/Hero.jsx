import React from 'react'
import './Hero.css'
import Lipskis from '../Assets/Lipskis.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-top">
        <img src={Lipskis} alt=""/>
    </div>

    <div className="text">
      <p style={{fontWeight: 'bold'}}>Šiuo metu:</p>

    </div>
    </div>
  )
}

export default Hero
