import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CardDetails from '../CardDetails/CardDetails'
import Footer from '../Footer/Footer'
import Info from '../Info/Info'
import Intention from '../Intention/Intention'
import LandingPage from '../LandingPage/LandingPage'
import Reading from '../Reading/Reading'
import SavedReadings from '../SavedReadings/SavedReadings'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isFooterVisible: false,
    }
  }

  toggleFooter = () => {
    this.setState({ isFooterVisible: !this.state.isFooterVisible})    
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
        component={ Intention }
        />
        <CardDetails />
     
              
        <Reading />
    
        <SavedReadings />
      
      </Switch>
      {this.state.isFooterVisible && <Footer toggleFooter={this.toggleFooter}/>}
    </>
      )
  }
}

export default App;
