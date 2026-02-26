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

      // If not in params, try to parse from hash (base URL: #/timelineId/reservationId/crmId or with page)
      if (!timelineId || !reservationId) {
        const hash = location.hash;
        // Base pattern: #/timelineId/reservationId/crmId or #/timelineId/reservationId/crmId/page
        const baseMatch = hash.match(/^#\/([^/]+)\/([^/]+)(?:\/([^/]+))?(?:\/|$)/);
        if (baseMatch && baseMatch[1] !== 'home') {
          timelineId = baseMatch[1];
          reservationId = baseMatch[2];
          crmId = baseMatch[3] || crmId;
        } else {
          // Legacy: #/home/timelineId/reservationId/crmId
          const homeMatch = hash.match(/#\/home\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
          if (homeMatch) {
            timelineId = homeMatch[1];
            reservationId = homeMatch[2];
            crmId = homeMatch[3] || crmId;
          } else {
            const legacyMatch = hash.match(/#\/\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
            if (legacyMatch) {
              timelineId = legacyMatch[1];
              reservationId = legacyMatch[2];
              crmId = legacyMatch[3] || crmId;
            }
          }
        }
      }

    // Also check sessionStorage as fallback
    if (!timelineId || !reservationId) {
      const storedTimelineId = sessionStorage.getItem('timelineId');
      const storedReservationId = sessionStorage.getItem('reservationId');
      const storedCrmId = sessionStorage.getItem('crmId');
      if (storedTimelineId && storedReservationId) {
        timelineId = storedTimelineId;
        reservationId = storedReservationId;
        crmId = storedCrmId || crmId;
      }
    }

    // Parse from current pathname when on a nested page (e.g. .../welcome) so navigation stays under base
    if ((!timelineId || !reservationId) && location.pathname) {
      const segments = location.pathname.split('/').filter(Boolean);
      if (segments.length >= 2) {
        timelineId = timelineId || segments[0];
        reservationId = reservationId || segments[1];
        crmId = crmId || (segments.length >= 3 ? segments[2] : undefined);
      }
    }

    return { timelineId, reservationId, crmId };
  };

  /**
   * Navigate to a route. Always keeps base URL: /timelineId/reservationId/crmId
   * @param path - The route path: '/' (landing), '/home', '/welcome', '/menu', etc.
   * @param options - Optional navigation options
   */
  const navigateWithIds = (path: string, options?: { replace?: boolean }) => {
    const { timelineId, reservationId, crmId } = getIds();

    // Always use base URL for every page when we have IDs
    if (timelineId && reservationId) {
      const base = `/${timelineId}/${reservationId}${crmId ? `/${crmId}` : ''}`;
      const pagePath = path === '/' || path === '' ? '' : path.startsWith('/') ? path : `/${path}`;
      const targetPath = pagePath ? `${base}${pagePath}` : base;
      navigate(targetPath, options);
      return;
    }

    navigate(path, options);
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
