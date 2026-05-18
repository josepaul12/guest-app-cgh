import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ensureGuestInfo, storeGuestIds } from '../services/guestInfo.ts';

/**
 * Component to handle URL parsing for patterns:
 * - #/timelineId/reservationId/crmId (new primary pattern)
 * - #/home/timelineId/reservationId/crmId (legacy pattern)
 * - #//timelineId/reservationId/crmId (legacy pattern)
 * This ensures proper routing for the guest-app pattern
 */
interface RouteHandlerProps {
  children: React.ReactNode;
}

const RouteHandler: React.FC<RouteHandlerProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const lastGuestFetchKey = useRef('');

  const parseAndNavigate = (hash: string) => {
    if (!hash) return;

    let timelineId: string | null = null;
    let reservationId: string | null = null;
    let crmId: string | null = null;
    let legacyHome = false;

    const baseMatch = hash.match(/^#\/([^/]+)\/([^/]+)(?:\/([^/]+))?(?:\/|$)/);
    if (baseMatch && baseMatch[1] !== 'home') {
      [, timelineId, reservationId, crmId] = baseMatch;
    } else {
      const homeMatch = hash.match(/#\/home\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
      if (homeMatch) {
        [, timelineId, reservationId, crmId] = homeMatch;
        legacyHome = true;
      } else {
        const doubleSlashMatch = hash.match(/#\/\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
        if (doubleSlashMatch) {
          [, timelineId, reservationId, crmId] = doubleSlashMatch;
        }
      }
    }

    if (timelineId && reservationId) {
      storeGuestIds({ timelineId, reservationId, crmId });

      const fetchKey = `${timelineId}|${reservationId}|${crmId || ''}`;
      if (lastGuestFetchKey.current !== fetchKey) {
        lastGuestFetchKey.current = fetchKey;
        ensureGuestInfo({ timelineId, reservationId, crmId });
      }

      if (legacyHome) {
        navigate(`/${timelineId}/${reservationId}${crmId ? `/${crmId}` : ''}/home`, {
          replace: true,
        });
      }
    }
  };

  useEffect(() => {
    parseAndNavigate(window.location.hash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  useEffect(() => {
    const handleHashChange = () => {
      parseAndNavigate(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default RouteHandler;
