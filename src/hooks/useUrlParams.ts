import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to parse URL parameters from hash route
 * Primary pattern: #/home/timelineId/reservationId/crmId (like cm-guestapp)
 * Legacy pattern: #//timelineId/reservationId/crmId
 */
export const useUrlParams = () => {
  const location = useLocation();
  const [params, setParams] = useState<{
    timelineId?: string;
    reservationId?: string;
    crmId?: string;
  }>({});

  useEffect(() => {
    const parseHash = () => {
      const hash = location.hash;
      
      // Primary pattern: #/home/timelineId/reservationId/crmId (like cm-guestapp)
      const homeMatch = hash.match(/#\/home\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
      if (homeMatch) {
        setParams({
          timelineId: homeMatch[1],
          reservationId: homeMatch[2],
          crmId: homeMatch[3],
        });
        return;
      }

      // Legacy pattern: #//timelineId/reservationId/crmId
      const legacyMatch = hash.match(/#\/\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
      if (legacyMatch) {
        setParams({
          timelineId: legacyMatch[1],
          reservationId: legacyMatch[2],
          crmId: legacyMatch[3],
        });
        return;
      }

      // If no match, try to get from current pathname
      const pathParts = location.pathname.split('/').filter(Boolean);
      if (pathParts.length >= 3 && pathParts[0] === 'home') {
        setParams({
          timelineId: pathParts[1],
          reservationId: pathParts[2],
          crmId: pathParts[3],
        });
      }
    };

    parseHash();
  }, [location]);

  return params;
};
