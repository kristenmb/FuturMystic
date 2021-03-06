import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CardDetails from '../CardDetails/CardDetails'
import Footer from '../Footer/Footer'
import Info from '../Info/Info'
import Intention from '../Intention/Intention'
import LandingPage from '../LandingPage/LandingPage'
import Reading from '../Reading/Reading'
import SavedReadings from '../SavedReadings/SavedReadings'
import { fetchCards } from '../../util'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isFooterVisible: false,
      cards: [],
      selectedCard: {},
      isFavorite: false,
      savedReadings: []
    }
  }

  toggleFooter = () => {
    this.setState({ isFooterVisible: !this.state.isFooterVisible})    
  }

  getReading = () => {
    fetchCards()
      .then(cards => this.setState({cards: cards.cards}))
  }

  getCardDetails = (event) => {
    const id = event.target.id
    this.setState(prevState => ({ selectedCard: prevState.cards[id]}))
  }

  saveReading = () => {
    if (!this.state.isFavorite) {
      this.setState(prevState => ({ 
        ...prevState,
        savedReadings: [...prevState.savedReadings, {[Date.now()]: prevState.cards}],
        isFavorite: true
      }))
    }
  }

  resetFavorite = () => {
    this.setState({ isFavorite: false })
  }

  render() {

    return (
      <>
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
          path="/reading/:card"
          render={() => <CardDetails selectedCard={this.state.selectedCard}/>}
        />
     
        {/* <SavedReadings /> */}
      
      </Switch>
      {this.state.isFooterVisible && <Footer toggleFooter={this.toggleFooter} resetFavorite={this.resetFavorite}/>}
    </>
      )
  }
}

export default App;
