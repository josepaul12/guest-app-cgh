import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Home from './pages/home.tsx';
import Welcome from './pages/welcome.tsx';
import Gallery from './pages/gallery.tsx';
import Menu from './pages/menu.tsx';
import Weather from './pages/weather.tsx';
import Nearby from './pages/nearby.tsx';
import Offers from './pages/offers.tsx';
import Experience from './pages/experience.tsx';
import CuratedExperiences from './pages/curated-experiences.tsx';
import FishingVillageTour from './pages/fishing-village-tour.tsx';
import FoodAndDrinks from './pages/food-and-drinks.tsx';
import Chakara from './pages/chakara.tsx';
import About from './pages/about.tsx';
import OtherDestinations from './pages/other-destinations.tsx';
import Ayurveda from './pages/ayurveda.tsx';
import Rooms from './pages/rooms.tsx';
import Wellness from './pages/wellness.tsx';
import Activities from './pages/activities.tsx';
import GuestServices from './pages/guest-services.tsx';
import Facilities from './pages/facilities.tsx';
import Message from './pages/message.tsx';
import HousekeepingPage from './components/HousekeepingPage';
import BottomNavigation from './components/BottomNavigation';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [activeTab, setActiveTab] = useState('home');

  const handleDiscoverMore = () => {
    setCurrentPage('home');
    setActiveTab('home');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setCurrentPage('home');
    } else if (tab === 'message') {
      setCurrentPage('message');
    } else if (tab === 'highlights') {
      setCurrentPage('highlights');
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setActiveTab('home');
  };

  const handleWelcomeClick = () => {
    setCurrentPage('welcome');
    setActiveTab('');
  };

  const handleGalleryClick = () => {
    setCurrentPage('gallery');
    setActiveTab('');
  };

  const handleMenuClick = () => {
    setCurrentPage('menu');
    setActiveTab('home');
  };

  const handleWeatherClick = () => {
    setCurrentPage('weather');
    setActiveTab('');
  };

  const handleNearbyClick = () => {
    setCurrentPage('nearby');
    setActiveTab('');
  };

  const handleOffersClick = () => {
    setCurrentPage('offers');
    setActiveTab('');
  };

  const handleExperienceClick = () => {
    setCurrentPage('experience');
    setActiveTab('');
  };

  const handleCuratedExperiencesClick = () => {
    setCurrentPage('curated-experiences');
    setActiveTab('');
  };

  const handleBackToExperience = () => {
    setCurrentPage('experience');
    setActiveTab('');
  };

  const handleFishingVillageTourClick = () => {
    setCurrentPage('fishing-village-tour');
    setActiveTab('');
  };

  const handleBackToCuratedExperiences = () => {
    setCurrentPage('curated-experiences');
    setActiveTab('');
  };

  const handleFoodAndDrinksClick = () => {
    setCurrentPage('food-and-drinks');
    setActiveTab('');
  };

  const handleChakaraClick = () => {
    setCurrentPage('chakara');
    setActiveTab('');
  };

  const handleBackToFoodAndDrinks = () => {
    setCurrentPage('food-and-drinks');
    setActiveTab('');
  };

  const handleAboutClick = () => {
    setCurrentPage('about');
    setActiveTab('');
  };

  const handleOtherDestinationsClick = () => {
    setCurrentPage('other-destinations');
    setActiveTab('');
  };

  const handleAyurvedaClick = () => {
    setCurrentPage('ayurveda');
    setActiveTab('');
  };

  const handleRoomsClick = () => {
    setCurrentPage('rooms');
    setActiveTab('');
  };

  const handleWellnessClick = () => {
    setCurrentPage('wellness');
    setActiveTab('');
  };

  const handleActivitiesClick = () => {
    setCurrentPage('activities');
    setActiveTab('');
  };

  const handleGuestServicesClick = () => {
    setCurrentPage('guest-services');
    setActiveTab('');
  };

  const handleFacilitiesClick = () => {
    setCurrentPage('facilities');
    setActiveTab('');
  };

  // Determine activeTab based on currentPage
  const getActiveTab = () => {
    if (currentPage === 'home') {
      return 'home';
    }
    if (currentPage === 'message') {
      return 'message';
    }
    return '';
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onDiscoverMore={handleDiscoverMore} />;
      case 'welcome':
        return <Welcome onBack={handleBackToHome} onOurCollectionClick={handleOtherDestinationsClick} />;
      case 'gallery':
        return <Gallery onBack={handleBackToHome} />;
      case 'menu':
        return <Menu onBack={handleBackToHome} onWeatherClick={handleWeatherClick} onNearbyClick={handleNearbyClick} />;
      case 'weather':
        return <Weather onBack={handleBackToHome} />;
      case 'nearby':
        return <Nearby onBack={handleBackToHome} />;
      case 'offers':
        return <Offers onBack={handleBackToHome} />;
      case 'experience':
        return <Experience onBack={handleBackToHome} onCuratedExperiencesClick={handleCuratedExperiencesClick} onActivitiesClick={handleActivitiesClick} />;
      case 'activities':
        return <Activities onBack={handleBackToExperience} />;
      case 'curated-experiences':
        return <CuratedExperiences onBack={handleBackToExperience} onFishingVillageTourClick={handleFishingVillageTourClick} />;
      case 'fishing-village-tour':
        return <FishingVillageTour onBack={handleBackToCuratedExperiences} />;
      case 'food-and-drinks':
        return <FoodAndDrinks onBack={handleBackToHome} onChakaraClick={handleChakaraClick} />;
      case 'chakara':
        return <Chakara onBack={handleBackToFoodAndDrinks} />;
      case 'about':
        return <About onBack={handleBackToHome} />;
      case 'other-destinations':
        return <OtherDestinations onBack={handleBackToHome} />;
      case 'ayurveda':
        return <Ayurveda onBack={handleBackToHome} />;
      case 'rooms':
        return <Rooms onBack={handleBackToHome} />;
      case 'wellness':
        return <Wellness onBack={handleBackToHome} />;
      case 'guest-services':
        return <GuestServices onBack={handleBackToHome} />;
      case 'facilities':
        return <Facilities onBack={handleBackToHome} />;
      case 'message':
        return <Message onBack={handleBackToHome} />;
      case 'housekeeping':
        return <HousekeepingPage onBack={handleBackToHome} />;
      case 'highlights':
        return <div className="highlights-page">Highlights page coming soon...</div>;
      default:
        return <Home onWelcomeClick={handleWelcomeClick} onGalleryClick={handleGalleryClick} onMenuClick={handleMenuClick} onOffersClick={handleOffersClick} onExperienceClick={handleExperienceClick} onFoodAndDrinksClick={handleFoodAndDrinksClick} onAboutClick={handleAboutClick} onOtherDestinationsClick={handleOtherDestinationsClick} onAyurvedaClick={handleAyurvedaClick} onRoomsClick={handleRoomsClick} onWellnessClick={handleWellnessClick} onGuestServicesClick={handleGuestServicesClick} onFacilitiesClick={handleFacilitiesClick} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
      {currentPage !== 'landing' && currentPage !== 'menu' && (
        <BottomNavigation activeTab={getActiveTab()} onTabChange={handleTabChange} />
      )}
    </div>
  );
}

export default App;
