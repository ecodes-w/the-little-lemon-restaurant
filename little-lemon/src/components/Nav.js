import React from 'react'
import logo from "../assets/littlelemon_logo.png";
import {useState} from "react";
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";




const Nav = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }
  return (
    <nav>
      <nav className='burger'>
        
      <img src={logo} alt='Little Lemon Logo'
    
      className='nav-image'></img>

      <button className='burger-icon' onclick={handleToggle}>
        <img src={navbarOpen ? Close : Hamburger} alt="Navigation bar"/>
      </button>
      </nav>
      <Navigation device="desktop"/>
      {navbarOpen ? <Navigation device="mobile" /> : ""}
    </nav>
  )
}

export default Nav
