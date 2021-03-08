import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CardDetails from '../CardDetails/CardDetails'
import Footer from '../Footer/Footer'
import Info from '../Info/Info'
import Intention from '../Intention/Intention'
import LandingPage from '../LandingPage/LandingPage'
import Reading from '../Reading/Reading'
import SavedReadings from '../SavedReadings/SavedReadings'
import Error from '../Error/Error'
import { fetchCards } from '../../util'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isFooterVisible: false,
      cards: [],
      selectedCard: {},
      isFavorite: false,
      userSavedReadings: [],
      error: false
    }
  }

  toggleFooter = () => {
    this.setState({ isFooterVisible: !this.state.isFooterVisible})    
  }

  getReading = () => {
    fetchCards()
      .then(cards => this.setState({ cards: cards.cards }))
      .catch(error => this.setState({ error: true }))
  }

  getCardDetails = (event) => {
    const id = event.target.id
    this.setState(prevState => ({ selectedCard: prevState.cards[id - 1]}))
  }

  saveReading = () => {
    if (!this.state.isFavorite) {
      this.setState(prevState => ({ 
        ...prevState,
        userSavedReadings: [...prevState.userSavedReadings, {[Date.now()]: prevState.cards, comments: ''}],
        isFavorite: true
      }))
    }
  }

  resetFavorite = () => {
    this.setState({ isFavorite: false })
  }

  resetError = () => {
    this.setState({ error: false })
  }

  render() {

    return (
      <>
      {this.state.error && <Error resetError={this.resetError}/>}
      {!this.state.error && 
      <Switch>
        <Route        
          exact path='/'
          render={() => {
            return <LandingPage toggleFooter={this.toggleFooter} />
          }}
        />      
        <Route 
          path='/info'
          component={ Info }
        />
        <Route 
          path='/intention'
          render={() => {
            return <Intention getReading={this.getReading}/>
          }}
        />
        <Route
          exact
          path='/saved-readings'
          render={() =>  {
            return <SavedReadings 
              userSavedReadings={this.state.userSavedReadings}
            /> 
          }}
        /> 
        <Route
          exact
          path='/reading'
          render={() => {
            return <Reading 
              cards={this.state.cards}
              getCardDetails={this.getCardDetails}
              isFavorite={this.state.isFavorite}
              saveReading={this.saveReading}
            />
          }}
        />
        <Route
            exact
            path='/reading/:card'
            render={() => <CardDetails selectedCard={this.state.selectedCard}/>}
          />     
      </Switch>}
      {this.state.isFooterVisible && !this.state.error &&
        <Footer
          toggleFooter={this.toggleFooter}
          resetFavorite={this.resetFavorite}
      />}
    </>
      )
  }
}

export default App;
