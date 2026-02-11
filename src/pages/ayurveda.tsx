import React from 'react';
import './ayurveda.css';
import ayurvedaImage from '../assets/images/imagesmarari/Ayurveda.jpg';
import airvedaImage from '../assets/images/imagesmarari/airveda.svg';

type AyurvedaProps = {
  onBack?: () => void;
};

const Ayurveda: React.FC<AyurvedaProps> = ({ onBack }) => {
  const firstContent = `The Ayurveda treatments at Marari Beach Resort are based on the Kalari Marma treatment style, developed centuries
ago in Kerala for Kalaripayattu warriors. In the martial art of Kalaripayattu, the warrior is trained to attack particular
Marma points in his opponent. Marmas are the vital points in the body where the life force energy is concentrated.
These are located where the flesh, veins, arteries, tendons, bones and joints meet. They may also be described as the
junctions where Vata, Pitta and Kapha meet; where Sattwa, Rajas and Tams meet; or where Eternity and Relativity
meet. Kalari Marma combines Ayurveda with the compassion, teachings and discipline of a Kalari warrior, specifically
with regard to keeping the prana flow in the body optimum. In this style, you are given an uzhichil or general body
massage, which is a combination of 156 strokes for the body and 66 strokes for the head. The strokes are designed
keeping in mind the 72000 energy channels and 108 vital points, with an objective to improve blood circulation, muscle
tone and overall wellness.
`;

  const secondContent = `CGH Earth Ayurveda is part of the wellness wing of CGH Earth, who are the pioneers in responsible tourism in India, with a credible background spanning over five decades in offering uniquely immersive travel experiences. CGH Earth Ayurveda offers healthcare service which are about complete well-being based on the traditional and authentic Ayurvedic system of healing. What we offer to anyone seeking holistic healing is something that is rooted in the group's own core values.`;

  return (
    <div className="ayurveda-page">
      <div className="ayurveda-background" />
      <div className="ayurveda-overlay" />
      
      <div className="ayurveda-topbar">
        <button className="ayurveda-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="ayurveda-title">Ayurveda</h1>
        <button className="ayurveda-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="ayurveda-content">
        <div className="ayurveda-hero-image-container">
          <img 
            src={ayurvedaImage} 
            alt="Ayurveda Wellness"
            className="ayurveda-hero-image"
          />
        </div>

        <div className="ayurveda-section">
          <h2 className="ayurveda-heading">Health in Totality</h2>
          <div className="ayurveda-text-content">
            <p className="ayurveda-description">{firstContent}</p>
          </div>
        </div>

        <div className="ayurveda-image-container">
          <img 
            src={airvedaImage} 
            alt="Ayurveda"
            className="ayurveda-section-image"
          />
        </div>

        <div className="ayurveda-section">
          <div className="ayurveda-text-content">
            <p className="ayurveda-description">{secondContent}</p>
          </div>
        </div>

        <div className="ayurveda-view-menu">
          <button className="ayurveda-view-menu-button">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ayurveda;
