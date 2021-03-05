import React from 'react'
import './CardDetails.css'

function CardDetails({ selectedCard }) {
  console.log(selectedCard)
  return (
    <h1>{selectedCard.name}</h1>
  );
}

export default CardDetails;