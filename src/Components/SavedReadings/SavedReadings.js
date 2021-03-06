import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './SavedReadings.css'

class SavedReadings extends Component {
  constructor({ userSavedReadings }) {
    super()
    this.state = {
      userSavedReadings: userSavedReadings,

    }
  }
  
 readingBoxes = () => {
    return this.state.userSavedReadings.map((reading, i) => {
      const getDate = parseInt(Object.keys(reading))
      const reformatDate = new Date(getDate)
      const date = `${reformatDate.getMonth() + 1}/${reformatDate.getDate()}/${reformatDate.getFullYear()}`
      return (
        <article className="reading-box" key={i}>
          <h2>{date}</h2>
        </article>
      )
    })
  }

  render() {
    console.log(this.state.userSavedReadings)
    return (
      <section>
        {this.readingBoxes()}
      </section>
    );
  }
}

export default SavedReadings;