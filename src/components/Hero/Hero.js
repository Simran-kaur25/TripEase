import React from 'react';
import travellerImage from '../../assets/Hero.png';
import './hero.css';

const Hero = () => {
  return (
    
    <div className="bg-primary wave-header min-h-screen relative overflow-hidden">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#faf5ef" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,234.7C640,245,800,203,960,197.3C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <div className="md:px-14 p-4 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="hero-content">
          <h2 className="hero-title">
          Plan Your Perfect Adventure
          </h2>
          <p className="hero-description">
          Discover Unique Destinations, Explore Diverse Cultures, and Experience the World Like Never Before!
          </p>
        </div>
        {/* Image Section */}
        <div className="hero-image">
          <img src={travellerImage} alt="Control" width={700} height={700} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
