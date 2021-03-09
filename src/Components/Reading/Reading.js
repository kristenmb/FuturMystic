import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'
import emptyBookmark from '../../assets/tealemptybookmark.png'
import fullBookmark from '../../assets/tealfullbookmark.png'
import { readingCards, threeCardHowTo } from '../../tarotData'
import PropTypes from 'prop-types'
import './Reading.css'

function Reading({ cards, getCardDetails, isFavorite, saveReading }) {
  const cardImages = cards.map((card, i) => {
    return (
      <Link to={`/reading/${card.name}`}  key={i} >
        <article>
          <Image
            imageName={card.name_short}
            className={"reading-card"}
            id={i+1}
            onClick={(event) => getCardDetails('cards', 'reading', event)}
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
          alt={isFavorite ? "Filled bookmark" : "Outline of bookmark"}
          className="bookmark"
          onClick={saveReading}
        />
      </header>
      <article className="card-container">
        {cardImages}
      </article>
      <div className="about-reading">
        <h1 className="reading-type">Past / Present / Future</h1>
        <article className="card-how-to-container">
          {readingCards}
        </article>
        <article className="about-reading-type-container">
          {threeCardHowTo}
        </article>
      </div>
    </section>
  );
}

export default Reading

Reading.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  getCardDetails: PropTypes.func,
  isFavorite: PropTypes.bool,
  saveReading: PropTypes.func
}