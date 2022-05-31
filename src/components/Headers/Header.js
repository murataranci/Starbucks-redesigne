import React from 'react'
import './Header.css';
import {FaSearch} from 'react-icons/fa'


const Header = () => {
  return (
    <div className='navbar'>
        <img className='starbucksLogo' src='https://marka-logo.com/wp-content/uploads/2020/09/Starbucks-Logo.png'></img>
        <a className='menu' href=''>Menu</a>
        <a className='arama' href=''><FaSearch/></a>
    </div>
  )
}

export default Header