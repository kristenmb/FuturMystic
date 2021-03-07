import React from 'react'
import { cardImages } from '../../cardImageData'

const Images = ({imageName, className, id, onClick}) => {
  return (
    <img
      src={cardImages[imageName].src}
      alt={cardImages[imageName].alt}
      className={className}
      id={id || null}
      onClick={onClick || null}
    />
  )
}

export default Images