import { useNavigate, useParams, useLocation } from 'react-router-dom';

/**
 * Custom hook for navigation that preserves URL parameters (timelineId, reservationId, crmId)
 * Similar to guest-app-clubmahindra pattern
 * URL pattern: #//timelineId/reservationId/crmId
 */
export const useAppNavigation = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  // Extract IDs from current route params or URL hash
  const getIds = () => {
    // Try to get from route params first
    let timelineId = params.timelineId;
    let reservationId = params.reservationId;
    let crmId = params.crmId;

    // If not in params, try to parse from hash
    if (!timelineId || !reservationId) {
      const hash = location.hash;
      
      // Primary pattern: #/home/timelineId/reservationId/crmId (like cm-guestapp)
      const homeMatch = hash.match(/#\/home\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
      if (homeMatch) {
        timelineId = homeMatch[1];
        reservationId = homeMatch[2];
        crmId = homeMatch[3] || crmId;
      } else {
        // Legacy pattern: #//timelineId/reservationId/crmId
        const legacyMatch = hash.match(/#\/\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
        if (legacyMatch) {
          timelineId = legacyMatch[1];
          reservationId = legacyMatch[2];
          crmId = legacyMatch[3] || crmId;
        }
      }
    }

    // Also check localStorage as fallback
    if (!timelineId || !reservationId) {
      const storedTimelineId = localStorage.getItem('timelineId');
      const storedReservationId = localStorage.getItem('reservationId');
      const storedCrmId = localStorage.getItem('crmId');
      
      if (storedTimelineId && storedReservationId) {
        timelineId = storedTimelineId;
        reservationId = storedReservationId;
        crmId = storedCrmId || crmId;
      }
    }

    return { timelineId, reservationId, crmId };
  };

  /**
   * Navigate to a route while preserving URL parameters
   * @param path - The route path (e.g., '/welcome', '/gallery')
   * @param options - Optional navigation options
   */
  const navigateWithIds = (path: string, options?: { replace?: boolean }) => {
    const { timelineId, reservationId, crmId } = getIds();

    // Build the path with IDs
    let targetPath = path;

    // If we have IDs and the path is not the landing page, preserve them
    if (timelineId && reservationId && path !== '/') {
      // For home route, use the pattern: /home/timelineId/reservationId/crmId
      // Or use double-slash pattern: //timelineId/reservationId/crmId
      if (path === '/home' || path.startsWith('/home')) {
        targetPath = `/home/${timelineId}/${reservationId}${crmId ? `/${crmId}` : ''}`;
      } else {
        // For other routes, navigate normally - IDs are preserved via localStorage
        // and can be accessed by components
        targetPath = path;
      }
    }

    navigate(targetPath, options);
  };

  /**
   * Get the current IDs from URL
   */
  const getCurrentIds = () => getIds();

  return {
    navigate: navigateWithIds,
    navigateRaw: navigate, // For cases where you don't want to preserve IDs
    getCurrentIds,
    timelineId: params.timelineId,
    reservationId: params.reservationId,
    crmId: params.crmId,
  };
};
