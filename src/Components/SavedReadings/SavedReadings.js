import React, { Component } from 'react'
import Image from '../Image/Image'
import { formatDate } from '../../util'
import PropTypes from 'prop-types'
import './SavedReadings.css'

class SavedReadings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userSavedReadings: props.userSavedReadings
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
      const cardThumbnails = reading[getDate].map(card => {
        return (
          <Image imageName={card.name_short} className={"thumbnails"} key={card.name}/>
        )
      })
      return (
        <article className="reading-box" key={i}>
          <h2>{formatDate(getDate)}</h2>
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
        <p>Add notes about your readings here  -  reflections, thoughts, or context  -  anything that may help your understanding of the spread.</p>
        <div className="saved-container">
          {this.readingBoxes()}
        </div>
      </section>
    );
  }
}

export default SavedReadings

SavedReadings.propTypes = {
  userSavedReadings: PropTypes.arrayOf(PropTypes.object)
}