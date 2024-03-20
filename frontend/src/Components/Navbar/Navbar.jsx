import React from 'react'
import './Navbar.css'
import logo from '../Assets/lipskio-aline.png'
import cart from '../Assets/bag.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src = {logo} alt = "" />
      </div>
      <ul className='nav-menu'>

        <li><Link to ='/' style={{color: '#d5a66e', textDecoration: 'none'}}>On-tap</Link></li>
        <li><Link to ='/Nealkoholiniai'style={{color: '#d5a66e', textDecoration: 'none'}}>Nealkoholiniai</Link></li>
        <li><Link to ='/Alus'style={{color: '#d5a66e', textDecoration: 'none'}}>Alus</Link></li>
        <li><Link to ='/Sidras'style={{color: '#d5a66e', textDecoration: 'none'}}>Sidras</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to = '/Login'><button>Prisijungti</button></Link>
        <Link to = '/Cart'><img src={cart} alt="" /></Link>
        <div className="nav-cart-count">0
        
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
