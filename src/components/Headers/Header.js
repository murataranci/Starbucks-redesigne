import React from 'react'
import './Header.css';
import {FaSearch} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

const Header = () => {
  return (
    <div className='navbar'>
        <img className='starbucksLogo' src='https://marka-logo.com/wp-content/uploads/2020/09/Starbucks-Logo.png'></img>
        <a className='menu' href=''>Menü</a>
        <input className='arama' placeholder='Aramadığınız ürünü yazınız..'></input><button className='searchButton'><FaSearch/></button>
        <AiOutlineUser className='user'/>
        <a className='giris' href=''>Giriş yap</a>
        <a className='kayıt' href=''>Kayıt ol</a>
        <button className='Shoppingcart'><AiOutlineShoppingCart/></button>

    </div>
  )
}

export default Header 