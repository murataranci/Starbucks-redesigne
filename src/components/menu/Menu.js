import React from 'react'
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className='menudetay container'>
      <div className='kahveler'>
        <Link className='kahveyazi' to={'/menu/kahveler'}>Kahveler</Link>
      </div>  
      <div className='caylar'>
        <Link  className='cayyazi' to={'/menu/paketcaylar'}>Paket Çaylar</Link>
      </div>
      <div className='aksesuarlar'>
        <Link  className='aksesuaryazi' to={'/menu/aksesuarlar'}>Aksesuarlar</Link>
      </div>
      
    </div>
  )
}

export default Menu