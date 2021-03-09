import React from 'react'
import { Link } from 'react-router-dom'
import hand from '../../assets/hand.png'
import PropTypes from 'prop-types'
import './LandingPage.css'

function LandingPage({ toggleFooter }) {
  return (
    <section className="landing-page-section">
      <h1>Welcome to FuturMystic</h1>
      <img 
        src={hand}
        alt="upward facing hand with sparkles above"
        className="welcome-img"
      />
      <Link to='/info' onClick={toggleFooter}>
        <button className="info-btn">Where Do I Start</button>
      </Link>
      <Link to='/intention' onClick={toggleFooter}>
        <button className="begin-btn">Begin a Reading</button>
      </Link>
    </section>
  );
}

export default LandingPage

LandingPage.propTypes = {
  toggleFooter: PropTypes.func
}