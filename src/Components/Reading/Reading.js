import React from 'react'
import { Link } from 'react-router-dom'
import emptyBookmark from '../../assets/tealemptybookmark.png'
import fullBookmark from '../../assets/tealfullbookmark.png'
import { cardImages } from '../../cardImageData'
import './Reading.css'

function Reading({ cards, getCardDetails, isFavorite, saveReading }) {
  console.log(cards)
  const cardNames = cards.map((card, i) => {
    return (
      <Link to={`/reading/${card.name}`}>
        <article key={i} >
          <img
            className="example"
            src={cardImages[card.name_short].src}
            id={i}
            onClick={(event) => getCardDetails(event)}
          />
        </article>
      </Link>
    )
  })
  return (
    <section className="reading-section">
      <header>
        <img
          src={isFavorite ? fullBookmark : emptyBookmark}
          alt="Outline of bookmark"
          className="bookmark"
          onClick={saveReading}
        />
      </header>
      <article className="card-container">
        {cardNames}
      </article>
      <div className="about-reading">
        <h1 className="reading-type">Past / Present / Future</h1>
        <p className="about-reading-type">text text text</p>
      </div>
    </section>
  );
}

export default Reading;