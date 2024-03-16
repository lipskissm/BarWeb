import React from 'react'
import './Hero.css'
import Lipskis from '../Assets/Lipskis.png'
import gubex from '../Assets/gubextr_lip.png'
import gubtms from '../Assets/gubtams_lip.png'
import mara from '../Assets/mara.png'
import ipa from '../Assets/ipa.png'
import gun from '../Assets/guiness.png'
import hoe from '../Assets/hoe.png'
import wachen from '../Assets/wachen.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-top">
        <img src={Lipskis} alt=""/>
    </div>

    <div className="text">
      <p style={{fontWeight: 'bold'}}>Šiuo metu:</p>

    </div>
    <div className='lipdukai-btn'>
      <li><img src={gubex} alt=''/></li>
      <li><img src={gubtms} alt=''/></li>
      <li><img src={mara} alt=''/></li>
      <li><img src={ipa} alt=''/></li>
      <li><img src={gun} alt=''/></li>
      <li><img src={hoe} alt=''/></li>
      <li><img src={wachen} alt=''/></li>
    </div>
    </div>
  )
}

export default Hero
