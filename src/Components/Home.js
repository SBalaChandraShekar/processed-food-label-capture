import React from 'react';
import './Home.css';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Services from './Services';

function Home() {
  return (
    <>
      <Header  />
      <div id="homeSection">
        <img src="images/intro-page.jpeg" className="img-responsive img-fluid myimg" alt='' />
      </div>
      <div id="aboutSection">
        <About />
      </div>
      <div id="servicesSection">
        <Services />
      </div>
      <div id="contactSection">
        <Contact />
      </div>
    </>
  );
}

export default Home;
