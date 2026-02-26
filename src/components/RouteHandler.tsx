import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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

  const parseAndNavigate = (hash: string) => {
    if (!hash) return;

    let timelineId: string | null = null;
    let reservationId: string | null = null;
    let crmId: string | null = null;
    let legacyHome = false; // legacy #/home/timelineId/reservationId/crmId

    // Base URL pattern: #/timelineId/reservationId/crmId or #/timelineId/reservationId/crmId/page
    const baseMatch = hash.match(/^#\/([^/]+)\/([^/]+)(?:\/([^/]+))?(?:\/|$)/);
    if (baseMatch && baseMatch[1] !== 'home') {
      [, timelineId, reservationId, crmId] = baseMatch;
    } else {
      // Legacy: #/home/timelineId/reservationId/crmId -> redirect to #/timelineId/reservationId/crmId/home
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
      // Store in sessionStorage
      sessionStorage.setItem('timelineId', timelineId);
      sessionStorage.setItem('reservationId', reservationId);
      if (crmId) {
        sessionStorage.setItem('crmId', crmId);
      }

      // Fetch both APIs only once before loading home page
      const fetchTimelineInfo = async () => {
        // Check if timeline info was already fetched
        const existingTimelineInfo = sessionStorage.getItem('timelineInfo');
        const storedTimelineId = sessionStorage.getItem('timelineId');
        
        // Only fetch if not already fetched or if timelineId changed
        if (existingTimelineInfo && storedTimelineId === timelineId) {
          return Promise.resolve(); // Already fetched
        }

        try {
          const url = `https://demo.pms.instio.co/api/pms/v2/timeline/${timelineId}/info`;
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log('Timeline info:', data);
          
          // Store timeline info if needed
          if (data) {
            sessionStorage.setItem('timelineInfo', JSON.stringify(data));
          }
        } catch (err) {
          console.error('Error fetching timeline info:', err);
        }
      };

      const fetchReservationInfo = async () => {
        // Check if reservation info was already fetched
        const existingReservationInfo = sessionStorage.getItem('reservationInfo');
        const storedTimelineId = sessionStorage.getItem('timelineId');
        const storedReservationId = sessionStorage.getItem('reservationId');
        const storedCrmId = sessionStorage.getItem('crmId');
        
        // Only fetch if not already fetched or if IDs changed
        if (existingReservationInfo && storedTimelineId === timelineId && storedReservationId === reservationId && storedCrmId === (crmId || '')) {
          return Promise.resolve(); // Already fetched
        }

        try {
          // Format: /reservation/_id/companyCRMId/info
          // Where _id = reservationId and companyCRMId = crmId
          // If crmId is not available, use timelineId as fallback
          const companyCRMId = crmId || timelineId || '';
          
          if (!companyCRMId) {
            console.error('Both crmId and timelineId are missing, cannot call reservation info API');
            return Promise.resolve();
          }
          
          const url = `https://demo.pms.instio.co/api/pms/v2/reservation/${reservationId}/${companyCRMId}/info`;
          console.log('Calling reservation info API:', url);
          
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            console.error(`Reservation info API error: ${response.status} ${response.statusText}`);
            console.error('URL attempted:', url);
            console.error('Parameters - reservationId:', reservationId, 'companyCRMId:', companyCRMId);
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log('Reservation info:', data);
          
          // Store reservation info
          sessionStorage.setItem('reservationInfo', JSON.stringify(data));
          
          // Extract first name from response data
          const firstName = data?.data?.firstName || data?.firstName || data?.guest?.firstName || data?.guestInfo?.firstName || '';
          
          // Store first name in localStorage (for menu component)
          if (firstName) {
            localStorage.setItem('userFirstName', firstName);
            // Trigger storage event for menu component to update
            window.dispatchEvent(new Event('storage'));
          }
          
          // Store companyCRMId (crm-id from URL) in localStorage
          if (crmId) {
            localStorage.setItem('companyCRMId', crmId);
          }
          
          // Extract and store companyId from API response
          const companyId = data?.data?.companyId || data?.companyId || data?.data?.reservation?.companyId || data?.reservation?.companyId || '';
          if (companyId) {
            sessionStorage.setItem('companyId', companyId);
            localStorage.setItem('companyCRMId', companyId); // Also store in localStorage for backward compatibility
          }
          
          // Extract and store siteId from API response
          const siteId = data?.data?.siteId || data?.siteId || data?.data?.reservation?.siteId || data?.reservation?.siteId || '';
          if (siteId) {
            sessionStorage.setItem('siteId', siteId);
            localStorage.setItem('siteId', siteId); // Also store in localStorage for backward compatibility
          }
        } catch (err) {
          console.error('Error fetching reservation info:', err);
        }
      };

      // Fetch both APIs sequentially (only once)
      fetchTimelineInfo()
        .then(() => {
          fetchReservationInfo();
        })
        .catch((err) => {
          console.error('Error in API fetch chain:', err);
        });

      // Keep base URL for every page: #/timelineId/reservationId/crmId (landing) or .../page
      if (legacyHome) {
        navigate(`/${timelineId}/${reservationId}${crmId ? `/${crmId}` : ''}/home`, { replace: true });
      }
      // If we had base pattern (#/tid/rid/cid or #/tid/rid/cid/...) do not navigate - URL already correct
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
