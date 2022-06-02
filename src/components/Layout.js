import React from 'react'
import Footer from './Footer/Footer'
import Header from './Headers/Header'
import {Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <>
      <Header/>
      <div className='container'>
          <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout