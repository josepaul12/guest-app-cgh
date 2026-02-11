import React from 'react';
import './DiscoverButton.css';

const DiscoverButton = ({ onDiscoverMore }) => {
  const handleDiscoverClick = () => {
    if (onDiscoverMore) {
      onDiscoverMore();
    } else {
      console.log('Discover More clicked');
    }
  };

  return (
    <div className="discover-button-container">
      <button className="discover-button" onClick={handleDiscoverClick}>
        <span className="discover-text">Discover More</span>
      </button>
    </div>
  );
};

export default DiscoverButton;

