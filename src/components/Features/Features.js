import React from 'react';
import image1 from '../../assets/Taj-Mahal.png'
import image2 from '../../assets/India-Gate.jfif'
import image3 from '../../assets/Golden-Temple.jpg'
import image4 from '../../assets/Amber-Palace.jpg'
import image5 from '../../assets/Red-Fort.jpg'
import './features.css';

const Features = () => {
  return (
    <div className="feature-container">
      <div className="feature-title-wrapper">
        <h3 className="feature-title">
        Discover your most favorite tourist place. 
        </h3>
        <p className="feature-description">
        </p>
      </div>
      <div className="feature-content">
        <div className="feature-cards">
          <div className="feature-grid">
            <div className="card">
              <div className="card-content">
               <img src={image1} alt="Taj Mahal" height={500} width={500} /> 
                <h5 className="card-title">
                  Taj Mahal
                </h5>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
              <img src={image2} alt="India Gate" height={500} width={500} /> 
                <h5 className="card-title">
                India Gate
                </h5>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
              <img src={image3} alt="Golden Temple" height={500} width={500} /> 
                <h5 className="card-title">
                  Golden Temple
                </h5>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
              <img src={image4} alt="Amber Palace" height={500} width={500} /> 
                <h5 className="card-title">
                 Amber Palace
                </h5>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
              <img src={image5} alt="Red Fort" height={500} width={500} /> 
                <h5 className="card-title">
                  Red Fort
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 