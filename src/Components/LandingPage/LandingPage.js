import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <section className="landing-page-section">
      <h1>Welcome</h1>
      <img 
        src=""
        alt=""
        className="welcome-img"
      />
      <Link to='/info'>
        <button>How to Start</button>
      </Link>
      <Link to='/intention'>
        <button>Begin a Reading</button>
      </Link>
    </section>
  );
}

export default LandingPage;