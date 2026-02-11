import React from 'react';
import './chakara.css';
import chakaraImage from '../assets/images/imagesmarari/chakara-restaurant.png';

type ChakaraProps = {
  onBack?: () => void;
};

const Chakara: React.FC<ChakaraProps> = ({ onBack }) => {
  return (
    <div className="chakara-page">
      <div className="chakara-background" />
      <div className="chakara-overlay" />
      
      <div className="chakara-topbar">
        <button className="chakara-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="chakara-title">Chakara</h1>
        <button className="chakara-call-button" aria-label="Call">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="chakara-content">
        <div className="chakara-hero-image-container">
          <img 
            src={chakaraImage} 
            alt="Chakara Restaurant"
            className="chakara-hero-image"
          />
        </div>

        <div className="chakara-description-section">
          <p className="chakara-description">
            At Chakara Restaurant, you can choose from the best of Indian and continental cuisines at our buffet, serenaded by vast greenery. The menu also explores the cuisines of other fishing communities across the coast of Kerala and Konkan.
          </p>
        </div>

        <div className="chakara-timings-section">
          <div className="chakara-section-header">
            <svg className="chakara-section-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#D4C5B9" strokeWidth="1.5"/>
              <path d="M12 6V12L16 14" stroke="#D4C5B9" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <h2 className="chakara-section-title">Timings:</h2>
          </div>
          <ul className="chakara-timings-list">
            <li className="chakara-timing-item">Lunch: 12:00 PM - 3:30 PM</li>
            <li className="chakara-timing-item">Dinner: 6:30 PM - 10:30 PM</li>
          </ul>
        </div>

        <div className="chakara-dress-code-section">
          <div className="chakara-section-header">
            <svg className="chakara-section-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2Z" stroke="#D4C5B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 22V20C6 17.7909 7.79086 16 10 16H14C16.2091 16 18 17.7909 18 20V22" stroke="#D4C5B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12H16M8 12L6 10M8 12L6 14M16 12L18 10M16 12L18 14" stroke="#D4C5B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="chakara-section-title">Dress code</h2>
          </div>
          <p className="chakara-dress-code-intro">
            Guests and staff are requested to follow the traditional Kerala attire to complement the theme:
          </p>
          <ul className="chakara-dress-code-list">
            <li className="chakara-dress-code-item">Men: Mundu with shirt or kurta</li>
            <li className="chakara-dress-code-item">Women: Saree or Kasavu set (Chakara / traditional Kerala saree style)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chakara;
