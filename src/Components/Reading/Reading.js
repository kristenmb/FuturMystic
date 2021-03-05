import React from 'react'
import emptyBookmark from '../../assets/tealemptybookmark.png'
import './Reading.css'

function Reading({ cards }) {
  console.log(cards)
  const cardNames = cards.map(card => {
    return (
      <p>{card.name}</p>
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
      {cardNames}
      <h1>Past / Present / Future</h1>
      <p></p>
    </section>
  );
}

export default Reading;