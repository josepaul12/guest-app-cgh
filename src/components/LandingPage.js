import React from 'react';
import Logo from './Logo';
import MainContent from './MainContent';
import DiscoverButton from './DiscoverButton';
import Footer from './Footer';
import './LandingPage.css';

const LandingPage = ({ onDiscoverMore }) => {
  return (
    <div className="landing-page">
      <div className="background-image" />
      <div className="overlay" />
      <div className="gradient-overlay" />
      <Logo />
      <MainContent />
      <DiscoverButton onDiscoverMore={onDiscoverMore} />
      <Footer />
    </div>
  );
};

export default LandingPage;

