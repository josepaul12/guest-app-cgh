import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

/**
 * Layout that wraps all routes under the base URL /:timelineId/:reservationId/:crmId?
 * Keeps IDs in sessionStorage and renders the current page via Outlet.
 */
const BaseLayout: React.FC = () => {
  const { timelineId, reservationId, crmId } = useParams();

  useEffect(() => {
    if (timelineId && reservationId) {
      sessionStorage.setItem('timelineId', timelineId);
      sessionStorage.setItem('reservationId', reservationId);
      if (crmId) {
        sessionStorage.setItem('crmId', crmId);
      } else {
        sessionStorage.removeItem('crmId');
      }
    }
  }, [timelineId, reservationId, crmId]);

  return <Outlet />;
};

export default BaseLayout;
