import React from 'react'
import { Link } from 'react-router-dom'
import './Intention.css'

function Intention() {
  return (
    <section className="intention-section">
      <h1>Set your intention for your reading</h1>
      <p></p>
      <Link to='/reading'>
      <button className='reading-btn'>Begin</button>
      </Link>
    </section>
  );
}

export default Intention;