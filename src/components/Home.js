import React from 'react'
import './Home.css'
import intro from './Video/Intro.mp4'

const Home = () => {
  return (
     <div className='container'>
    <video className='video' autoPlay loop muted >
      <source src={intro} type='video/mp4'></source>
    </video>
  </div>
  )
}

export default Home