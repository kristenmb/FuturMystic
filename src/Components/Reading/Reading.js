import React from 'react'
import { Link } from 'react-router-dom'
import emptyBookmark from '../../assets/tealemptybookmark.png'
import example from '../../assets/cards/ar00.jpg'
import './Reading.css'

function Reading({ cards, getCardDetails }) {
  console.log(cards)
  const cardNames = cards.map((card, i) => {
    return (
      <Link to={`/reading/${card.name}`}>
        <article key={i} >
          <img className="example" src={example} id={i} onClick={(event) => getCardDetails(event)}/>
          <p>{card.name}</p>
        </article>
      </Link>
    )
  })
  return (
    <section className="reading-section">
      <header>
        <img
          src={emptyBookmark}
          alt="Outline of bookmark"
          className="bookmark"
        />
      </header>
      <article className="card-container">
        {cardNames}
      </article>
      <h1>Past / Present / Future</h1>
      <p></p>
    </section>
  );
}

export default Reading;