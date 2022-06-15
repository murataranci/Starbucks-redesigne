import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import Layout from '../../components/Layout'
import Menu from "../../components/menu/Menu"
import Home from "../../components/Home"
import Sepet from "../../components/Sepet/Sepet"
import Kahveler from "../../components/menu/Kahveler/Kahveler"
import Paketcaylar from "../../components/menu/Paketcaylar/Paketcaylar"
import Aksesuarlar from "../../components/menu/Aksesuarlar/Aksesuarlar"
import SignInUp from "../../containers/SignInUp/SignInUp";

// const RequireAuth = ({ children }) => {
//   const { token } = useSelector((state) => state.auth);

//   if (!token) {
//     return <Navigate to="/sign-in-up" replace />;
//   }
//   return children;
// };


 


const Pages= () => {
  return (
    <Router>
     
    <Routes>
        <Route element={<Layout/>}>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sepet' element={<Sepet/>}></Route>
        <Route path='/menu/kahveler' element={<Kahveler/>}></Route>
        <Route path='/menu/paketcaylar' element={<Paketcaylar/>}></Route>
        <Route path='/menu/aksesuarlar' element={<Aksesuarlar/>}></Route>
        <Route path="/giris-yap" element= {<SignInUp />}></Route>
        </Route>
    </Routes>
    </Router>
  )
}

export default Pages