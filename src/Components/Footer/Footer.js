import React from 'react'
import cardsBtn from '../../assets/tealcards.png'
import saved from '../../assets/tealgoldsaved.png'
import home from '../../assets/home.png'

import { Link } from 'react-router-dom'
import './Footer.css'

function Footer({ toggleFooter, resetFavorite }) {
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
          onClick={resetFavorite}
        />
      </Link>
      <Link to='/saved-readings'>
        <img 
          src={saved}
          alt="Bookmark with Star"
          className="footer-saved footer-icon"
        />
      </Link>
    </footer>
  );
}

export default Footer;