import React from 'react'
import cardsBtn from '../../assets/tealcards.png'
import savedReadings from '../../assets/tealgoldsaved.png'
import home from '../../assets/home.png'

import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({ toggleFooter }) {
  return (
    <footer>
      <Link to='/' onClick={toggleFooter}> 
         <img 
          src={home}
          alt="House"
          className="footer-icon"
        />
      </Link>
      <Link to='/intention'>
        <img 
          src={cardsBtn}
          alt="Three cards fanned out"
          className="footer-icon"
        />
      </Link>
      <Link>
        <img 
          src={savedReadings}
          alt="Bookmark with Star"
          className="footer-saved footer-icon"
        />
      </Link>
    </footer>
  );
}

export default Footer;