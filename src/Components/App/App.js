import React from 'react'
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
    <>
      <CardDetails />
      <Footer />
      <Info />
      <Intention />
      <LandingPage />
      <Reading />
      <SavedReadings />
    </>
  );
}

export default App;
