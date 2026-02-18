import React from 'react';
import { useLocation } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

const PageLayout = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Pages that should NOT show bottom navigation
  const hideBottomNav = ['/', '/menu'];
  
  // Determine active tab based on current route
  const getActiveTab = () => {
    if (pathname === '/home' || pathname.startsWith('/home/')) {
      return 'home';
    }
    if (pathname === '/message') {
      return 'message';
    }
    if (pathname === '/highlights') {
      return 'highlights';
    }
    return '';
  };

  const shouldShowBottomNav = !hideBottomNav.includes(pathname);

  return (
    <>
      {children}
      {shouldShowBottomNav && (
        <BottomNavigation activeTab={getActiveTab()} />
      )}
    </>
  );
};

export default PageLayout;
