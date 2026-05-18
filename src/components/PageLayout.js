import React from 'react';
import { useLocation } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

const pageSegment = (pathname) => {
  const parts = pathname.split('/').filter(Boolean);
  return parts[parts.length - 1] || '';
};

const PageLayout = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const segment = pageSegment(pathname);

  const hideBottomNav = segment === 'menu' || pathname === '/';

  const getActiveTab = () => {
    if (segment === 'home') return 'home';
    if (segment === 'message') return 'message';
    if (segment === 'highlights') return 'highlights';
    return '';
  };

  const shouldShowBottomNav = !hideBottomNav;

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
