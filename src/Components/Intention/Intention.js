import React from 'react'
import { Link } from 'react-router-dom'
import './Intention.css'

function Intention() {
  return (
    <section className="intention-section">
      <h1>Set your intentions</h1>
      <p>Take three deep breaths and focus on what you want to know</p>
      <Link to='/reading'>
      <button className='reading-btn'>Begin</button>
      </Link>
    </section>
  );
}

export default Intention;