import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import UnderMaintenans from './Components/UnderMaintenans/UnderMaintenans';
import ContactUs from './Components/ContactUs/ContactUs';
import Hero from './Components/Hero/Hero';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <ContactUs/>
    <Footer/>
    <UnderMaintenans/>
    </>
  );
}

export default App;
