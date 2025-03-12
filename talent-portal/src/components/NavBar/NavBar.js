import React from 'react'
import logo from '../../assets/logo4.png'
import './NavBar.css'
import { useState } from "react";

const NavBar = ({ onButtonClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("checked" +isMenuOpen);
  };
  return (
  <nav className="container">
    <img src={logo} width={80} height={40} alt=''></img>
         <ul>
            <li className='nothamburger'><a href="#">Home</a></li>
            <li className='nothamburger'><a href="#">About</a></li>
            <li className='nothamburger'><a href="#">Services</a></li>
         <li><button className='btn' onClick={() => onButtonClick(true)}>Contact Us</button></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
            &#9776; 
          </div>
  </nav>
  )
}


export default NavBar
