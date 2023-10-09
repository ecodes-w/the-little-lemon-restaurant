import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <menu>
        <li className='img-footer'>
          <img
            src={require("../assets/footer-logo.png")}
            alt="Little Lemon Logo"
          ></img>

        </li>
        <li className='contact'>
          <h1 className='footer-header'>Navigation</h1>
          <ul className='footer-links'>
            <Link to="/">Home</Link>
            <Link to="/about"></Link>
            <a
            href={require("../assets/menu.webp")}
            target="_blank"
            rel="noreferrer"
            >
              Menu
            </a>
            <Link to="/reservations">Reservation</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>

          </ul>
        </li>

        <li>
          <h1 className='footer-header'>Contact</h1>
          <ul className='footer-links'>
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(629)-243-6827</li>
            <br></br>
            <a
              href='mailto: info@littlelemon.com'
              target="_blank"
              rel="noreferrer">
                info@littlelemon.com
              </a>

          </ul>
        </li>
        <li>
          <h1 className='footer-header'>Contact</h1>
          <ul className='footer-link'>
            <a
            href='https://www.facebook.com/thelittlelemonshop'
            target="_blank"
            rel="noreferrer"
            
            >
              Facebook
            </a>
            <a
            href='https://www.instagram.com/littlelemoon/'
            target="_blank"
            rel="noreferrer">
           instagram


            </a>
          </ul>
        </li>



      </menu>

      
    </footer>
  )
}

export default Footer
