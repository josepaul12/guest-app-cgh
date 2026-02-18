import React from 'react';
import { useNavigate } from 'react-router-dom';
import './beach-grill.css';
import restaurant1Image from '../assets/images/imagesmarari/restaurant-1.png';

const BeachGrill: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="beach-grill-page">
      <div className="beach-grill-background" />
      <div className="beach-grill-overlay" />
      
      <div className="beach-grill-topbar">
        <button className="beach-grill-back-button" onClick={() => navigate(-1)} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="beach-grill-title">Beach Grill</h1>
        <button className="beach-grill-call-button" aria-label="Call" onClick={() => window.location.href = 'tel:+918071700830'}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="beach-grill-content">
        <div className="beach-grill-hero-image-container">
          <img 
            src={restaurant1Image} 
            alt="Beach Grill"
            className="beach-grill-hero-image"
          />
        </div>

        <div className="beach-grill-description-section">
          <p className="beach-grill-description">
            Savor perfectly grilled seafood and meats at our Beach Grill. Experience the art of open-flame cooking with ocean views as your backdrop. Our grill masters prepare each dish to perfection using the freshest local ingredients.
          </p>
        </div>

        <div className="beach-grill-timings-section">
          <div className="beach-grill-section-header">
            <svg className="beach-grill-section-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#D4C5B9" strokeWidth="1.5"/>
              <path d="M12 6V12L16 14" stroke="#D4C5B9" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <h2 className="beach-grill-section-title">Timings:</h2>
          </div>
          <ul className="beach-grill-timings-list">
            <li className="beach-grill-timing-item">Dinner: 6:30 PM - 10:30 PM</li>
            <li className="beach-grill-timing-item">Reservations recommended</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BeachGrill;
