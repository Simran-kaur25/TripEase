import React from 'react';
import travellerImage from '../../assets/Traveller 1.png';
import './hero.css';

const Hero = () => {
  return (
    // <div className="hero">
    //   <div className="bg-white wave-header min-h-screen relative overflow-hidden">
    //   <svg
    //   className="w-full h-auto block"
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 1440 320"
    //   >
    //     <path
    //       fill="#f3f4f5"
    //       fillOpacity="1"
    //       d="M0,160L80,138.7C160,117,320,75,480,85.3C640,96,800,160,960,160C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    //     />
    //   </svg>
    //   <div className="hero-content">
    //     <h2 className="hero-title">Discover Your Next Adventure</h2>
    //     <h1 className='bg-white-500 '>HELLO</h1>
    //     <p className="hero-description">
    //       Goyto - Travel & Tourism Agency WordPress Theme is a clean, elegant, and modern design responsive premium WordPress theme.
    //     </p>
    //   </div>
    //   <div className="hero-image">
    //     <img src={travellerImage} alt="Travel" />
    //   </div>
    // </div>
    // </div>
    <div className="bg-primary wave-header min-h-screen relative overflow-hidden">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#faf5ef" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,234.7C640,245,800,203,960,197.3C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <div className="md:px-14 p-4 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="hero-content">
          <h2 className="hero-title">
            Discover  Your Next Adv 
          </h2>
          <p className="hero-description">
            A paragraph is a collection of words combined together to make a longer unit than a sentence.
            It's a set of sentences that are well-organized and coherent.
          </p>
        </div>
        {/* Image Section */}
        <div className="hero-image">
          <img src={travellerImage} alt="Control" width={700} height={700} className="hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
