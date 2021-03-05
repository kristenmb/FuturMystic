import React from 'react'
import emptyBookmark from '../../assets/tealemptybookmark.png'
import example from '../../assets/cards/ar00.jpg'
import './Reading.css'

function Reading({ cards }) {
  console.log(cards)
  const cardNames = cards.map(card => {
    return (
      <article>
        <img className="example" src={example}/>
        <p>{card.name}</p>
      </article>
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