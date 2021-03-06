import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/backarrow.png'
import { cardImages } from '../../cardImageData'
import './CardDetails.css'

function CardDetails({ selectedCard }) {
  return (
    <>
      <header className="details-header">
        <Link to='/reading'>
          <img
            className="back-arrow"
            src={arrow}
            alt="Arrow pointing left"
          />
        </Link>
      </header>
      <section className="details-section">
        <img
          className="details-img"
          src={`.${cardImages[selectedCard.name_short].src}`}
          alt={cardImages[selectedCard.name_short].alt}
        />
        <article className="details-text">
          <h1>{selectedCard.name}</h1>
          <h2>Meaning:</h2>
          <p>{selectedCard.meaning_up}</p>
          <h2>Reversed:</h2>
          <p>{selectedCard.meaning_rev}</p>
        </article>
      </section>
    </>
  );
}

export default CardDetails;