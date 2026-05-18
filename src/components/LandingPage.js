import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Logo from './Logo';
import MainContent from './MainContent';
import DiscoverButton from './DiscoverButton';
import Footer from './Footer';
import { ensureGuestInfo } from '../services/guestInfo.ts';
import { preloadHomeImages } from '../utils/preloadHomeImages.ts';
import './LandingPage.css';

const LandingPage = () => {
  const { timelineId, reservationId, crmId } = useParams();

  useEffect(() => {
    const tid = timelineId || sessionStorage.getItem('timelineId');
    const rid = reservationId || sessionStorage.getItem('reservationId');
    const cid = crmId ?? sessionStorage.getItem('crmId');
    if (tid && rid) {
      ensureGuestInfo({ timelineId: tid, reservationId: rid, crmId: cid });
      preloadHomeImages();
    }
  }, [timelineId, reservationId, crmId]);

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

