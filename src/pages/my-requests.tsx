import React, { useState, useEffect } from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation.ts';
import './housekeeping.css';

interface WorkOrderItem {
  _id?: string;
  id?: string;
  service?: string;
  description?: string;
  workOrderStatus?: string;
  status?: string;
  location?: string;
  createdAt?: string;
  [key: string]: any;
}

const MyRequests: React.FC = () => {
  const { navigateRaw } = useAppNavigation();
  const [items, setItems] = useState<WorkOrderItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      setError(null);

      const timelineId = sessionStorage.getItem('timelineId') || '';
      const reservationId = sessionStorage.getItem('reservationId') || '';
      const crmId = sessionStorage.getItem('crmId') || '';

      // Resolve company and site IDs similar to housekeeping
      let companyId = sessionStorage.getItem('companyId') || localStorage.getItem('companyCRMId') || '';
      let siteId = sessionStorage.getItem('siteId') || localStorage.getItem('siteId') || '';

      if (!companyId || !siteId) {
        const reservationInfoStr = sessionStorage.getItem('reservationInfo');
        if (reservationInfoStr) {
          try {
            const reservationInfo = JSON.parse(reservationInfoStr);
            const extractedCompanyId =
              reservationInfo?.data?.companyId ??
              reservationInfo?.companyId ??
              reservationInfo?.data?.reservation?.companyId ??
              reservationInfo?.reservation?.companyId;
            const extractedSiteId =
              reservationInfo?.data?.siteId ??
              reservationInfo?.siteId ??
              reservationInfo?.data?.reservation?.siteId ??
              reservationInfo?.reservation?.siteId;

            if (extractedCompanyId && !companyId) {
              companyId = extractedCompanyId;
              sessionStorage.setItem('companyId', extractedCompanyId);
            }
            if (extractedSiteId && !siteId) {
              siteId = extractedSiteId;
              sessionStorage.setItem('siteId', extractedSiteId);
              localStorage.setItem('siteId', extractedSiteId);
            }
          } catch {
            // ignore parse error
          }
        }
      }

      if (!companyId || !siteId) {
        setError('Missing company or site information. Please reload the page.');
        setLoading(false);
        return;
      }

      const customerIdHeader =
        sessionStorage.getItem('customerId') ||
        crmId ||
        reservationId ||
        '';

      const statuses = ['NEW', 'OPEN', 'ON_HOLD', 'IN_PROGRESS', 'WAITING', 'CLOSED'];
      const params = new URLSearchParams();
      statuses.forEach((s) => params.append('workOrderStatuses', s));
      params.append('source', 'PMS');
      if (crmId) params.append('referenceId', crmId);
      params.append('companyId', companyId);
      params.append('siteId', siteId);
      if (reservationId) params.append('initiatedById', reservationId);

      const url = `https://demo.wo.instio.co/api/customer/search?${params.toString()}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          customerid: customerIdHeader,
        },
      });

      if (!response.ok) {
        const text = await response.text().catch(() => '');
        throw new Error(`WO search failed: ${response.status} ${response.statusText}${text ? ` - ${text}` : ''}`);
      }

      const result = await response.json();

      let list: WorkOrderItem[] = [];
      if (Array.isArray(result)) {
        list = result;
      } else if (Array.isArray(result?.data)) {
        list = result.data;
      } else if (Array.isArray(result?.data?.data)) {
        list = result.data.data;
      }

      setItems(list);
    } catch (err) {
      console.error('Error fetching work orders:', err);
      setError('Failed to load requests. Please try again.');
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const formatStatus = (item: WorkOrderItem) => {
    const raw = item.workOrderStatus || item.status || '';
    if (!raw) return 'Unknown';
    return String(raw).replace(/_/g, ' ').toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
  };

  const formatDate = (value?: string) => {
    if (!value) return '';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="housekeeping-page">
      <div className="housekeeping-background" />
      <div className="housekeeping-overlay" />
      
      <div className="housekeeping-topbar">
        <button className="housekeeping-back-button" onClick={() => navigateRaw(-1)} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="housekeeping-title">My requests</h1>
        <button className="housekeeping-call-button" aria-label="Call" onClick={() => window.location.href = 'tel:+918071700830'}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="housekeeping-content">
        {/* <div className="housekeeping-header">
          <p className="housekeeping-subtitle">Your requests</p>
          <p className="housekeeping-choose-text">Track the status of your requests.</p>
        </div> */}

        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#302F27' }}>
            <p>Loading requests...</p>
          </div>
        ) : error ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#d32f2f' }}>
            <p>{error}</p>
            <button
              onClick={fetchRequests}
              style={{
                marginTop: '16px',
                padding: '8px 16px',
                backgroundColor: '#CAA593',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Retry
            </button>
          </div>
        ) : items.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#302F27' }}>
            <p>No requests found.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {items.map((item) => {
              const ticketNumber =
                item.companyWOId ??
                item.ticketNumber ??
                item.ticketNo ??
                item.referenceId ??
                item._id ??
                item.id ??
                '';
              const createdValue = item.createdOn ?? item.createdAt;
              const createdText = formatDate(createdValue);

              return (
                <div
                  key={item._id ?? item.id}
                  className="housekeeping-service-button"
                  style={{ alignItems: 'stretch' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: 8 }}>
                    <div style={{ flex: 1, paddingRight: 8 }}>
                      <div
                        className="housekeeping-service-label"
                        style={{ fontWeight: 600, marginBottom: 4, textAlign: 'left' }}
                      >
                        {item.service || 'Service'}
                      </div>
                      {item.description && (
                        <div
                          className="housekeeping-service-label"
                          style={{ fontSize: 11, textAlign: 'left', opacity: 0.9 }}
                        >
                          {item.description}
                        </div>
                      )}
                    </div>
                    {ticketNumber && (
                      <div
                        style={{
                          minWidth: 70,
                          padding: '6px 8px',
                          backgroundColor: '#ffe8dc',
                          borderRadius: 8,
                          textAlign: 'center',
                          alignSelf: 'flex-start',
                        }}
                      >
                        <div
                          className="housekeeping-service-label"
                          style={{ fontSize: 10, opacity: 0.8, marginBottom: 2 }}
                        >
                          Ticket
                        </div>
                        <div className="housekeeping-service-label" style={{ fontSize: 13, fontWeight: 600 }}>
                          {String(ticketNumber).slice(-4)}
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      marginTop: 4,
                    }}
                  >
                    <div className="housekeeping-service-label" style={{ fontSize: 11, opacity: 0.9 }}>
                      <span style={{ opacity: 0.7 }}>Status <br></br></span>
                      <span>{formatStatus(item)}</span>
                    </div>
                    {createdText && (
                      <div
                        className="housekeeping-service-label"
                        style={{ fontSize: 11, opacity: 0.9, textAlign: 'right' }}
                      >
                        <span style={{ opacity: 0.7, marginRight: 4 }}>Requested on<br></br></span>
                        <span>{createdText}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRequests;

