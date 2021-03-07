import React, { Component } from 'react'
import { cardImages } from '../../cardImageData'
import './SavedReadings.css'

class SavedReadings extends Component {
  constructor({ userSavedReadings }) {
    super()
    this.state = {
      userSavedReadings: userSavedReadings
    }
  }

  handleChange = (event) => {
    const { id, value} = event.target
    
    this.setState(prevState => ({
    userSavedReadings: prevState.userSavedReadings.map(item => {
      const readingDate = Object.keys(item)
      return (readingDate[0] === id ? Object.assign(item, { comments: value }) : item)
    })
    }))
  }

  readingBoxes = () => {
    return this.state.userSavedReadings.map((reading, i) => {
      const getDate = parseInt(Object.keys(reading))
      const reformatDate = new Date(getDate)
      const date = `${reformatDate.getMonth() + 1}/${reformatDate.getDate()}/${reformatDate.getFullYear()}`
      const cardThumbnails = reading[getDate].map(card => {
        return (
          <img
            src={cardImages[card.name_short].src}
            alt={cardImages[card.name_short].alt}
            className="thumbnails"
          />
        )
        })
      return (
        <article className="reading-box" key={i}>
          <h2>{date}</h2>
          <div>
            {cardThumbnails}
          </div>
          <form>
            <textarea
              name="comments"
              id={getDate}
              value={reading.comments}
              onChange={this.handleChange}
            />
          </form>
        </article>
      )
    })
  }

  render() {
    return (
      <section className="saved-section">
        <h1>My Saved Readings</h1>
        <p>Add notes about your reading here, context</p>
        <div className="saved-container">
          {this.readingBoxes()}
        </div>
      </section>
    );
  }
}

export default SavedReadings;