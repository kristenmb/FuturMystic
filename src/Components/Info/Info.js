import React from 'react'
import { Link } from 'react-router-dom'
import { tarotInfo, howToRead } from '../../tarotData'
import './Info.css'

function Info() {  
  return (
    <section className="info-section">
      <article className="what-article">
        <h1>What is tarot?</h1>
        {tarotInfo}
      </article>
      <article className="how-article">
        <h1>How do I read the cards?</h1>
        {howToRead}
      </article>
      <Link to='/intention'>
      <button className="begin-btn">Begin Reading</button>
      </Link>
    </section>
  )
}

export default Info;