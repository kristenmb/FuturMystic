import React from 'react'
import { Link } from 'react-router-dom'
import { tarotInfo, tarotSuits, howToRead } from '../../tarotData'
import './Info.css'

function Info() {  
  return (
    <section className="info-section">
      <article className="what-article">
        <h1>What is tarot?</h1>
        <p className="about-tarot">{tarotInfo}</p>
        <p className="about-tarot">{tarotSuits}</p>
      </article>
      <article className="how-article">
        <h1>How do I read the cards?</h1>
        <div>{howToRead}</div>
      </article>
      <Link to='/intention'>
      <button className="begin-btn">Begin Reading</button>
      </Link>
    </section>
  )
}

export default Info;