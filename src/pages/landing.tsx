import React from 'react';
import Logo from '../components/Logo';
import MainContent from '../components/MainContent';
import DiscoverButton from '../components/DiscoverButton';
import Footer from '../components/Footer';
import '../components/LandingPage.css';

type LandingProps = {
  onDiscoverMore?: () => void;
};

const Landing: React.FC<LandingProps> = ({ onDiscoverMore }) => {
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

export default Landing;


