import React from 'react'
import { Link } from 'react-router-dom'
import stars from '../../assets/tealstars.png'
import PropTypes from 'prop-types'
import './Intention.css'

function Intention({ getReading }) {
  return (
    <section className="intention-section">
      <h1>Set your intentions</h1>
      <img 
        src={stars}
        alt="Three gold stars"
        className="stars"
      />
      <p>Take three deep breaths and focus on what you want to know</p>
      <Link to='/reading' onClick={getReading}>
      <button className='reading-btn'>Begin</button>
      </Link>
    </section>
  );
}

export default Intention

Intention.propTypes = {
  getReading: PropTypes.func
}