import React from 'react'
import { cardImages } from '../../cardImageData'
import './CardDetails.css'

function CardDetails({ selectedCard }) {
  return (
    <section className="details-section">
      <img
        className="details-img"
        src={`.${cardImages[selectedCard.name_short].src}`}
        alt={cardImages[selectedCard.name_short].alt}
      />
      <article className="details-text">
        <h1>{selectedCard.name}</h1>
        <p>Meaning: {selectedCard.meaning_up}</p>
        <p>Reversed: {selectedCard.meaning_rev}</p>
      </article>
    </section>
  );
}

export default CardDetails;