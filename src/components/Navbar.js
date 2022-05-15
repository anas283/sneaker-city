import React from 'react'
import './Navbar.css'
import logo from '../assets/icons/logo.svg'
import cartIcon from '../assets/icons/fi_shopping-cart.svg'
import heartIcon from '../assets/icons/fi_heart.svg'
import userIcon from '../assets/icons/fi_user.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <img className='logo' src={logo} alt="logo" />
      </div>
      <div className='row'>
        <div className='nav'>New arrivals</div>
        <div className='nav'>Men</div>
        <div className='nav'>Women</div>
        <div className='nav'>Kids</div>
      </div>
      <div className='row'>
        <img className='icon' src={cartIcon} alt="icon" />
        <img className='icon' src={heartIcon} alt="icon" />
        <img className='icon' src={userIcon} alt="icon" />
      </div>
    </div>
  )
}

export default Navbar;