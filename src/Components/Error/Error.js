import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'
import PropTypes from 'prop-types'
import './Error.css'

const Error = ({ resetError }) => {
  return (
    <section className="error-message-section">
    <h1 className="error">The stars are not aligned, please return to home and try again.</h1>
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

Error.propTypes = {
  resetError: PropTypes.func
}