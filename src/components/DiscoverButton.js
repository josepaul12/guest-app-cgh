import React from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation.ts';
import './DiscoverButton.css';

const DiscoverButton = ({ onDiscoverMore }) => {
  const { navigate } = useAppNavigation();

  const handleDiscoverClick = () => {
    if (onDiscoverMore) {
      onDiscoverMore();
    } else {
      // navigate('/home') uses base URL /timelineId/reservationId/crmId/home via useAppNavigation
      navigate('/home');
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

