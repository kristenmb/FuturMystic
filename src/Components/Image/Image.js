import React from 'react'
import { cardImages } from '../../tarotData'
import PropTypes from 'prop-types'

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

Images.propTypes = {
  imageName: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func
}