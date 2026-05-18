const API_BASE =
  process.env.REACT_APP_PMS_URL || 'https://demo.pms.instio.co/api/pms/v2';
const JSON_HEADERS = { 'Content-Type': 'application/json' };

export type GuestIds = {
  timelineId: string;
  reservationId: string;
  crmId?: string | null;
};

let timelineInflight: Promise<void> | null = null;
let reservationInflight: Promise<void> | null = null;
let lastTimelineKey = '';
let lastReservationKey = '';

const applyReservationData = (data: Record<string, unknown>, crmId?: string | null) => {
  sessionStorage.setItem('reservationInfo', JSON.stringify(data));

  const firstName =
    (data?.data as { firstName?: string } | undefined)?.firstName ||
    (data as { firstName?: string }).firstName ||
    (data as { guest?: { firstName?: string } }).guest?.firstName ||
    (data as { guestInfo?: { firstName?: string } }).guestInfo?.firstName ||
    '';

  if (firstName) {
    localStorage.setItem('userFirstName', firstName);
    window.dispatchEvent(new Event('storage'));
  }

  if (crmId) {
    localStorage.setItem('companyCRMId', crmId);
  }

  const companyId =
    (data?.data as { companyId?: string; reservation?: { companyId?: string } } | undefined)
      ?.companyId ||
    (data as { companyId?: string }).companyId ||
    (data?.data as { reservation?: { companyId?: string } } | undefined)?.reservation
      ?.companyId ||
    (data as { reservation?: { companyId?: string } }).reservation?.companyId ||
    '';

  if (companyId) {
    sessionStorage.setItem('companyId', companyId);
    localStorage.setItem('companyCRMId', companyId);
  }

  const siteId =
    (data?.data as { siteId?: string; reservation?: { siteId?: string } } | undefined)
      ?.siteId ||
    (data as { siteId?: string }).siteId ||
    (data?.data as { reservation?: { siteId?: string } } | undefined)?.reservation?.siteId ||
    (data as { reservation?: { siteId?: string } }).reservation?.siteId ||
    '';

  if (siteId) {
    sessionStorage.setItem('siteId', siteId);
    localStorage.setItem('siteId', siteId);
  }
};

export async function fetchTimelineInfo(timelineId: string): Promise<void> {
  const key = timelineId;
  if (
    lastTimelineKey === key &&
    sessionStorage.getItem('timelineInfo') &&
    sessionStorage.getItem('timelineId') === timelineId
  ) {
    return;
  }

  if (timelineInflight && lastTimelineKey === key) {
    return timelineInflight;
  }

  lastTimelineKey = key;
  timelineInflight = (async () => {
    try {
      const res = await fetch(`${API_BASE}/timeline/${timelineId}/info`, {
        method: 'GET',
        headers: JSON_HEADERS,
      });
      if (!res.ok) {
        throw new Error(`Timeline API error: ${res.status}`);
      }
      const data = await res.json();
      if (data) {
        sessionStorage.setItem('timelineInfo', JSON.stringify(data));
      }
    } catch (err) {
      console.error('Error fetching timeline info:', err);
    } finally {
      timelineInflight = null;
    }
  })();

  return timelineInflight;
}

export async function fetchReservationInfo(
  timelineId: string,
  reservationId: string,
  crmId?: string | null
): Promise<void> {
  const companyCRMId = crmId || timelineId || '';
  if (!companyCRMId) {
    console.error('Both crmId and timelineId are missing, cannot call reservation info API');
    return;
  }

  const key = `${reservationId}|${companyCRMId}`;
  if (
    lastReservationKey === key &&
    sessionStorage.getItem('reservationInfo') &&
    sessionStorage.getItem('reservationId') === reservationId &&
    sessionStorage.getItem('crmId') === (crmId || '')
  ) {
    return;
  }

  if (reservationInflight && lastReservationKey === key) {
    return reservationInflight;
  }

  lastReservationKey = key;
  reservationInflight = (async () => {
    try {
      const url = `${API_BASE}/reservation/${reservationId}/${companyCRMId}/info`;
      const res = await fetch(url, {
        method: 'GET',
        headers: JSON_HEADERS,
      });
      if (!res.ok) {
        throw new Error(`Reservation API error: ${res.status}`);
      }
      const data = await res.json();
      applyReservationData(data, crmId);
    } catch (err) {
      console.error('Error fetching reservation info:', err);
    } finally {
      reservationInflight = null;
    }
  })();

  return reservationInflight;
}

/** Fetch timeline + reservation info once (parallel). Safe to call from landing and RouteHandler. */
export function ensureGuestInfo(ids: GuestIds): void {
  const { timelineId, reservationId, crmId } = ids;
  if (!timelineId || !reservationId) return;

  void Promise.all([
    fetchTimelineInfo(timelineId),
    fetchReservationInfo(timelineId, reservationId, crmId),
  ]);
}

export function storeGuestIds(ids: GuestIds): void {
  const { timelineId, reservationId, crmId } = ids;
  sessionStorage.setItem('timelineId', timelineId);
  sessionStorage.setItem('reservationId', reservationId);
  if (crmId) {
    sessionStorage.setItem('crmId', crmId);
  }
}
