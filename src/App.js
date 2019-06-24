import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';


function App() {
  return (
    <div className="App" style={{height:'1280px', backgroundColor: 'cornflowerblue'}}>
    <Header/>

    <Element name="featured">
          <Featured/>
        </Element>
        <Element name="venueinfo">
          <VenueInfo/>
        </Element>
        <Element name="highlights">
          <Highlights/>
        </Element>
        <Element name="Pricing">
          <Pricing/>
        </Element>
        <Element name="location">
          <Location/>
        </Element>
        <Element name="footer">
          <Footer/>
        </Element>
        
        
    </div>
   
  );


}

export default App;
