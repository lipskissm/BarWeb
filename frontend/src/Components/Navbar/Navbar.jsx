import React from 'react'
import './Navbar.css'
import logo from '../Assets/lipskio-aline.png'
import cart from '../Assets/bag.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src = {logo} alt = "" />
      </div>
      <ul className='nav-menu'>

        <li>On-tap</li>
        <li>Asortimentas</li>
        <li>Apie mus</li>
        <li>Kur?</li>
      </ul>
      <div className="nav-login-cart">
        <button>Prisijungti</button>
        <img src={cart} alt="" />
        <div className="nav-cart-count">0
        
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
