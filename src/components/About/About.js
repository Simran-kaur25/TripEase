import React from 'react';

// import image2 from '../path_to_your_image2'; // Replace with the correct path to your image2
// import image3 from '../path_to_your_image3'; // Replace with the correct path to your image3
import './about.css';

const About = () => {
  return (
    <div className="about-conatiner py-24 md:px-14 px-4 max-w-screen-xl mx-auto">
      <div className="about-content flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="about-title text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Plan Your Trip with Ease
          </h3>
          <p className="about-description text-base text-tertiary">
            Make friends with money, not fear it. Simplify tourism.
          </p>
        </div>
        <div className="about-cards w-full lg:w-3/4">
          <div className="about-grid grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start gap-6">
        
              <div className="card bg-overlay rounded-lg h-96 shadow-lg flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
                <div className="card-content">
                  {/* <img src={image2} alt="Got 5 minutes?" height={500} width={500} /> */}
                  <h5 className="card-title text-xl font-semibold text-primary px-5 text-center mt-5">
                    Got 5 minutes? <br /> Bite-Sized Money Lessons
                  </h5>
                </div>
              </div>
          
            <div className="card bg-overlay rounded-lg h-96 shadow-lg flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
              <div className="card-content">
                {/* <img src={image2} alt="Level Up Your Finances" height={500} width={500} /> */}
                <h5 className="card-title text-xl font-semibold text-primary px-5 text-center">
                  Level Up Your Finances: <br /> Playful Lessons, Real Results
                </h5>
              </div>
            </div>
        
              <div className="card bg-overlay rounded-lg h-96 shadow-lg flex justify-center items-center hover:-translate-y-4 transition-all duration-300">
                <div className="card-content">
                  {/* <img src={image3} alt="AI-Designed Roadmaps" height={400} width={400} /> */}
                  <h5 className="card-title text-xl font-semibold text-primary px-5 text-center">
                    Chart Your Course: <br /> AI-Designed Roadmaps for Personal Growth
                  </h5>
                </div>
              </div>
           
          </div>
        </div>
      </div>
    </div>

  );
};

export default About;