import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CardDetails from '../CardDetails/CardDetails'
import Footer from '../Footer/Footer'
import Info from '../Info/Info'
import Intention from '../Intention/Intention'
import LandingPage from '../LandingPage/LandingPage'
import Reading from '../Reading/Reading'
import SavedReadings from '../SavedReadings/SavedReadings'
import './App.css';

function App() {
  return (
    <Switch>

      <Route        
        exact path='/'
        render={() => {
          return <LandingPage />
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
     
        <Footer />
              
        <Reading />
    
        <SavedReadings />
      
    </Switch>
  );
}

export default App;
