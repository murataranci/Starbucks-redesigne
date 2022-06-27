import React from 'react'
import './Footer.css'
import { FaSpotify } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (  
    <>
    <div className='footer-container mt-5'>
      <div className='mt-5 col-12 row'>
      <div id='footer1' className='col-2'>
        <img className='starbucks-logo' src='https://marka-logo.com/wp-content/uploads/2020/09/Starbucks-Logo.png' />
        <p className='mt-2'>© 2022 Starbucks Coffee Company.</p>
        <p className=''>All rights reserved.</p>
      </div>
      <div id='footer2' className='col-2'>
        <span><b>About Us</b></span>
        <p className='mt-4'>Our Company</p>
        <p>Our Coffee</p>
        <p>Stories and News</p>
        <p>Starbucks Archive</p>
        <p>Investor Relations</p>
        <p>Customer Service</p>
      </div>
      <div id='footer3' className='col-2'>
        <span><b>Careers</b></span>
        <p className='mt-4'>Culture and Values</p>
        <p>Inclusion, Diversity, and Equity</p>
        <p>College Achievement Plan</p>
        <p>Alumni Community</p>
        <p>U.S. Careers</p>
        <p>International Careers</p>
        </div>
      <div id='footer4' className='col-2'>
        <span><b>Social Impact</b></span>
        <p className='mt-4'>People</p>
        <p>Planet</p>
        <p>Environmental and Social Impact Reporting</p>
</div>
      <div id='footer5' className='col-2'>
        <span><b>For Business Partners</b></span>
      <p className='mt-4'>Landlord Support Center</p>
      <p>Suppliers</p>
      <p>Corporate Gift Card Sales</p>
      <p>Office and Foodservice Coffee</p>
      </div>
      <div id='footer6' className='col-2'>
        <span><b>Order and Pickup</b></span>
        <p className='mt-4'>Order on the App</p>
        <p>Order on the Web</p>
        <p>Delivery</p>
        <p>Order and Pickup Options</p>
        <p>Explore and Find Coffee for Home</p>
        </div>
    </div>
    <div className='gray-line'></div>
    <div className='d-flex justify-content-between'>
    <div className='mt-3 d-flex flex-row'>
      <p id='Privacy-pol'>Privacy Policy &nbsp;&nbsp;|</p>
      <p id='Terms-of-Use'>&nbsp;&nbsp;Terms of Use&nbsp;&nbsp;|</p>
      <p id='CA-Suply'>&nbsp;&nbsp;CA Supply Chain Act&nbsp;&nbsp;|</p>
      <p id='Cookie-Pre'>&nbsp;&nbsp;Cookie Preferences&nbsp;&nbsp; |</p>     
    </div>
    <div className='social-media mt-2 d-flex flex-row'>
      <div className=''>
    <FaSpotify className='logo-size'></FaSpotify>
    <FaFacebook className='logo-size'></FaFacebook>
    <FaInstagramSquare className='Radius-logo logo-size'></FaInstagramSquare>
    <FaYoutubeSquare className='Radius-logo logo-size'></FaYoutubeSquare>
    <AiFillTwitterCircle className='logo-size'></AiFillTwitterCircle>
    <FaPinterest className='logo-size'></FaPinterest>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Footer