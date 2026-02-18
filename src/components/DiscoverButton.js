import React from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation.ts';
import './DiscoverButton.css';

const DiscoverButton = ({ onDiscoverMore }) => {
  const { navigate, getCurrentIds } = useAppNavigation();

  const handleDiscoverClick = () => {
    if (onDiscoverMore) {
      onDiscoverMore();
    } else {
      const { timelineId, reservationId, crmId } = getCurrentIds();
      if (timelineId && reservationId) {
        navigate(`/home/${timelineId}/${reservationId}${crmId ? `/${crmId}` : ''}`);
      } else {
        navigate('/home');
      }
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

