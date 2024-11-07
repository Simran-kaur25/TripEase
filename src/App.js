import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
};

export default App;