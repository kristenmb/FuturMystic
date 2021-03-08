import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'
import './Error.css'

const Error = ({ resetError }) => {
  return (
    <section className="error-message">
    <h1>The stars are not aligned, please return to home and try again.</h1>
    <Link to='/'>
      <img 
          src={home}
          alt="House"
          className="footer-icon"
          onClick={resetError}
        />
    </Link>
    </section>
  )
}

export default Error