import React from 'react'
import { Link } from 'react-router-dom'
import hand from '../../hand.png'
import './LandingPage.css'

function LandingPage() {
  return (
    <section className="landing-page-section">
      <h1>Welcome</h1>
      <img 
        src={hand}
        alt="upward facing hand with sparkles above"
        className="welcome-img"
      />
      <Link to='/info'>
        <button className="info-btn">Where Do I Start?</button>
      </Link>
      <Link to='/intention'>
        <button className="begin-btn">Begin a Reading</button>
      </Link>
    </section>
  );
}

export default LandingPage;