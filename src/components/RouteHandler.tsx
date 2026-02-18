import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Component to handle URL parsing for patterns:
 * - #/home/timelineId/reservationId/crmId (primary pattern like cm-guestapp)
 * - #//timelineId/reservationId/crmId (legacy pattern)
 * This ensures proper routing for the guest-app-clubmahindra pattern
 */
interface RouteHandlerProps {
  children: React.ReactNode;
}

const RouteHandler: React.FC<RouteHandlerProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const parseAndNavigate = (hash: string) => {
    if (!hash) return;

    let timelineId: string | null = null;
    let reservationId: string | null = null;
    let crmId: string | null = null;

    // Primary pattern: #/home/timelineId/reservationId/crmId (like cm-guestapp)
    const homeMatch = hash.match(/#\/home\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
    if (homeMatch) {
      [, timelineId, reservationId, crmId] = homeMatch;
    } else {
      // Legacy pattern: #//timelineId/reservationId/crmId
      const doubleSlashMatch = hash.match(/#\/\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
      if (doubleSlashMatch) {
        [, timelineId, reservationId, crmId] = doubleSlashMatch;
      }
    }

    if (timelineId && reservationId) {
      // Store in localStorage for persistence
      localStorage.setItem('timelineId', timelineId);
      localStorage.setItem('reservationId', reservationId);
      if (crmId) {
        localStorage.setItem('crmId', crmId);
      }

      // Convert to proper route format: /home/timelineId/reservationId/crmId
      const targetPath = `/home/${timelineId}/${reservationId}${crmId ? `/${crmId}` : ''}`;

      // Only navigate if we're not already on the correct path
      if (location.pathname !== targetPath) {
        navigate(targetPath, { replace: true });
      }
    }
  };

  useEffect(() => {
    // Parse hash on initial load
    const hash = window.location.hash;
    parseAndNavigate(hash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      parseAndNavigate(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return <>{children}</>;
};

export default RouteHandler;
