import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PageLayout from './components/PageLayout';
import RouteHandler from './components/RouteHandler.tsx';
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
import TodaysRecommendation from './pages/todays-recommendation.tsx';
import BeachShack from './pages/beach-shack.tsx';
import FarmKitchen from './pages/farm-kitchen.tsx';
import BeachGrill from './pages/beach-grill.tsx';
import TeaCard from './pages/tea-card.tsx';
import BeachHouseBar from './pages/beach-house-bar.tsx';
import PoolVillaDining from './pages/pool-villa-dining.tsx';
import ExclusiveDining from './pages/exclusive-dining.tsx';
import About from './pages/about.tsx';
import OtherDestinations from './pages/other-destinations.tsx';
import Ayurveda from './pages/ayurveda.tsx';
import Rooms from './pages/rooms.tsx';
import Wellness from './pages/wellness.tsx';
import Activities from './pages/activities.tsx';
import GuestServices from './pages/guest-services.tsx';
import Facilities from './pages/facilities.tsx';
import Message from './pages/message.tsx';
import Housekeeping from './pages/housekeeping.tsx';
import './App.css';

function App() {
  return (
    <HashRouter>
      <RouteHandler>
        <div className="App">
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Main route pattern: #/home/timelineId/reservationId/crmId -> Home */}
            {/* Also handles: #//timelineId/reservationId/crmId via RouteHandler */}
            <Route path="/home/:timelineId/:reservationId/:crmId?" element={<PageLayout><Home /></PageLayout>} />
            <Route path="/home" element={<PageLayout><Home /></PageLayout>} />
          
          {/* Other pages - these will preserve IDs via navigation hook */}
          <Route path="/welcome" element={<PageLayout><Welcome /></PageLayout>} />
          <Route path="/gallery" element={<PageLayout><Gallery /></PageLayout>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/weather" element={<PageLayout><Weather /></PageLayout>} />
          <Route path="/nearby" element={<PageLayout><Nearby /></PageLayout>} />
          <Route path="/offers" element={<PageLayout><Offers /></PageLayout>} />
          
          {/* Experience pages */}
          <Route path="/experience" element={<PageLayout><Experience /></PageLayout>} />
          <Route path="/activities" element={<PageLayout><Activities /></PageLayout>} />
          <Route path="/curated-experiences" element={<PageLayout><CuratedExperiences /></PageLayout>} />
          <Route path="/fishing-village-tour" element={<PageLayout><FishingVillageTour /></PageLayout>} />
          
          {/* Food & Drinks */}
          <Route path="/food-and-drinks" element={<PageLayout><FoodAndDrinks /></PageLayout>} />
          <Route path="/chakara" element={<PageLayout><Chakara /></PageLayout>} />
          <Route path="/todays-recommendation" element={<PageLayout><TodaysRecommendation /></PageLayout>} />
          <Route path="/beach-shack" element={<PageLayout><BeachShack /></PageLayout>} />
          <Route path="/farm-kitchen" element={<PageLayout><FarmKitchen /></PageLayout>} />
          <Route path="/beach-grill" element={<PageLayout><BeachGrill /></PageLayout>} />
          <Route path="/tea-card" element={<PageLayout><TeaCard /></PageLayout>} />
          <Route path="/beach-house-bar" element={<PageLayout><BeachHouseBar /></PageLayout>} />
          <Route path="/pool-villa-dining" element={<PageLayout><PoolVillaDining /></PageLayout>} />
          <Route path="/exclusive-dining" element={<PageLayout><ExclusiveDining /></PageLayout>} />
          
          {/* Other pages */}
          <Route path="/about" element={<PageLayout><About /></PageLayout>} />
          <Route path="/other-destinations" element={<PageLayout><OtherDestinations /></PageLayout>} />
          <Route path="/ayurveda" element={<PageLayout><Ayurveda /></PageLayout>} />
          <Route path="/rooms" element={<PageLayout><Rooms /></PageLayout>} />
          <Route path="/wellness" element={<PageLayout><Wellness /></PageLayout>} />
          <Route path="/guest-services" element={<PageLayout><GuestServices /></PageLayout>} />
          <Route path="/facilities" element={<PageLayout><Facilities /></PageLayout>} />
          <Route path="/housekeeping" element={<PageLayout><Housekeeping /></PageLayout>} />
          
          {/* Message page */}
          <Route path="/message" element={<PageLayout><Message /></PageLayout>} />
          
          {/* Highlights page */}
          <Route path="/highlights" element={<PageLayout><div className="highlights-page">Highlights page coming soon...</div></PageLayout>} />
          
            {/* Default redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </RouteHandler>
    </HashRouter>
  );
}

export default App;
