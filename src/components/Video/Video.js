import React from 'react'
import intro from './Intro.mp4'
import './Video.css'
import Video from './Video/Video'

const video = () => {
  return (
    <div>
    <video className='video' autoPlay loop muted >
      <source src={intro} type='video/mp4'></source>
    </video>
  </div>
  )
}

export default video