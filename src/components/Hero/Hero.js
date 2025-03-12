import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/arrow.png';
import UserForm from '../User/UserForm';
import { useState } from "react";


const Hero = ({ message }) => {
  
  return (
    <div className='hero container'>
      <div className='left-side-container'>
      <h1>Business Consulting </h1>
      <p>We drive product and service innovation, improve financial performance, accelerate market speed</p>
      <button className='btn'>Explore more<img src={dark_arrow} alt=""></img></button>
      </div>
      <div className='right-side-container'>
      {message ? <div className='login-container'><UserForm /></div> : null } 
      </div>
    </div>
  )
}

export default Hero
