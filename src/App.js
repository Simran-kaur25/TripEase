import React from 'react';
import './app.css'
import { Navbar } from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';


const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/> 
    <About/>
    </div>
  )
}

export default App