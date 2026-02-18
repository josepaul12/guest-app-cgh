import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import MainContent from './MainContent';
import DiscoverButton from './DiscoverButton';
import Footer from './Footer';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Parse URL hash to extract IDs
    // Primary pattern: #/home/timelineId/reservationId/crmId (like cm-guestapp)
    // Legacy pattern: #//timelineId/reservationId/crmId
    const hash = location.hash || window.location.hash;
    
    if (hash) {
      let timelineId = null;
      let reservationId = null;
      let crmId = null;

      // Check for primary pattern: #/home/timelineId/reservationId/crmId
      const homeMatch = hash.match(/#\/home\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
      if (homeMatch) {
        [, timelineId, reservationId, crmId] = homeMatch;
      } else {
        // Check for legacy pattern: #//timelineId/reservationId/crmId
        const legacyMatch = hash.match(/#\/\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
        if (legacyMatch) {
          [, timelineId, reservationId, crmId] = legacyMatch;
        }
      }

      if (timelineId && reservationId) {
        // Store IDs in localStorage for persistence
        localStorage.setItem('timelineId', timelineId);
        localStorage.setItem('reservationId', reservationId);
        if (crmId) {
          localStorage.setItem('crmId', crmId);
        }
        
        // Redirect to home with IDs
        navigate(`/home/${timelineId}/${reservationId}${crmId ? `/${crmId}` : ''}`, { replace: true });
        return;
      }
    }
  }, [location, navigate]);

  return (
    <div className="landing-page">
      <div className="background-image" />
      <div className="overlay" />
      <div className="gradient-overlay" />
      <Logo />
      <MainContent />
      <DiscoverButton />
      <Footer />
    </div>
  );
};

export default LandingPage;

