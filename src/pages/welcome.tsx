import React from 'react';
import './welcome.css';

type WelcomeProps = {
  onBack?: () => void;
  onOurCollectionClick?: () => void;
};

const Welcome: React.FC<WelcomeProps> = ({ onBack, onOurCollectionClick }) => {
  return (
    <div className="welcome-page">
      <div className="welcome-background" />
      <div className="welcome-overlay" />
      <div className="welcome-topbar">
        <button className="welcome-back-button" onClick={onBack} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="welcome-logo-container">
        <div className="welcome-logo">
          <img src="https://www.cghearth.com/img/brand-logo.png" alt="CGH Earth" />
        </div>
      </div>
      
      <div className="welcome-content">
        <p className="welcome-text">
          CGH Earth conceives and organizes truly remarkable travel experiences over multiple destinations in southern India. A family owned enterprise, the group began its operations in 1954 with their flagship property, the Casino Hotel, in Willingdon Island, Kochi.
          <br /><br />
          The small hotel that started out to cater to port visitors in Willingdon Island, Kochi, in the 1950s has evolved into an unusual experiment in tourism. It has become widely known today for its respect for nature and local cultures around which its singular travel experiences are spun.
          <br /><br />
          Over time this small seed has spawned a cluster of fine hotels in southern India that are a toast to the land and its people, as much as to the creative spirit of its visionaries. Together, they celebrate a soaring imagination and a refined aesthetic that gives all these properties their distinctive character.
        </p>
        
        <div className="welcome-buttons">
          <button className="welcome-button">
            <span>Brand</span>
          </button>
          <button className="welcome-button" onClick={onOurCollectionClick}>
            <span>Our collection</span>
          </button>
          <button className="welcome-button">
            <span>Core values</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
