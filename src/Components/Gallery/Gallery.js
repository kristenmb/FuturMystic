import React from 'react'
import Image from '../Image/Image'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import './Gallery.css'

const Gallery = ({ fullDeck, getCardDetails }) => {
  const cardThumbnails = fullDeck.map((card, i) => {
     return (
     <Link to={`/gallery/${card.name}`}  key={i} >
        <article>
          <Image
            imageName={card.name_short}
            className={"gallery-thumbnail"}
            id={i+1}
            onClick={(event) => getCardDetails('fullDeck', 'gallery', event)}
          />
          <Footer />
        </article>
      </Link>
     )
  })

  return (
    <section className="gallery-section">
      <h1 className="gallery-title">Card Gallery</h1>
      <p className="gallery-desc">Click through the cards to familiarize yourself with them.</p>
      <article className="thumbnail-container">
        {cardThumbnails}
      </article> 
    </section>
  )
}

export default Gallery