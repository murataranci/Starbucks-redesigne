import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../../components/Layout'
import Menu from "../../components/menu/Menu"
import Home from "../../components/Home"
import Sepet from "../../components/Sepet"

const Pages= () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sepet' element={<Sepet/>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Pages