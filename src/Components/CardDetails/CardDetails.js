import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import arrow from '../../assets/backarrow.png'
import { cardImages } from '../../tarotData'
import PropTypes from 'prop-types'
import './CardDetails.css'

function CardDetails({ selectedCard, returnLocation }) {
  return (
    <>
      <header className="details-header">
        <Link to={`/${returnLocation}`}>
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
        </article>
      </section>
    </>
  );
}

export default CardDetails;

CardDetails.propTypes = {
  selectedCard: PropTypes.object
}
