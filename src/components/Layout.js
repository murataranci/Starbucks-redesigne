import React from 'react'
import Footer from './Footer/Footer'
import Header from './Headers/Header'
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header/>
          <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout