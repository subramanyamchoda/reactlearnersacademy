import React, { useState } from 'react';
import Home from '../rest/Home';
import About from '../rest/About';
import Header from '../rest/Header';
import Footer from '../rest/Footer';
import { home, about } from "./img";

const Mainpage = () => {
  const [homeImages, setHomeImages] = useState(home); 
  const [aboutImages, setAboutImages] = useState(about); 

  return (
    <div>
      <Header />
      <Home home={homeImages} /> 
      <About about={aboutImages} /> 
      <Footer />
    </div>
  );
}

export default Mainpage;
