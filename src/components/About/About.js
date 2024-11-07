import React from 'react';
import image from '../../assets/img.png';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img 
          src={image} 
          alt="Control" 
          className="about-img"
        />
      </div>
      <div className="about-content">
        <h2>Plan Your Trip with Ease</h2>
        <p>
          Practice writing skills with paragraph typing exercises. This practice lesson consists of short paragraphs about interesting subjects.
        </p>
      </div>
    </div>
  );
}

export default About;
