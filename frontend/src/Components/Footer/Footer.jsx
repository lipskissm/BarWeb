import React from 'react'
import './Footer.css'
import lipskis from '../Assets/lipskio-aline1.png'
import ig from '../Assets/ig.png'
import fb from '../Assets/fb.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={lipskis} alt='' />
      </div>

      <ul className="footer-links">
        <li>Asortimentas</li>
        <li>Įmonė</li>
        <li>Apie</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={ig} alt='' />
        </div>
        <div className="footer-icons-container">
          <img src={fb} alt='' />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
