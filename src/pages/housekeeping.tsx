import React, { useState, useEffect } from 'react';
import { useAppNavigation } from '../hooks/useAppNavigation.ts';
import './housekeeping.css';

interface ServiceItem {
  _id?: string;
  id?: string;
  name?: string;
  Name?: string;
  label?: string;
  icon?: string;
  Icon?: string;
  iconUrl?: string;
  [key: string]: any;
}

const Housekeeping: React.FC = () => {
  const { navigateRaw } = useAppNavigation();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>('');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get IDs from sessionStorage (set by RouteHandler)
      const timelineId = sessionStorage.getItem('timelineId');
      const reservationId = sessionStorage.getItem('reservationId');

      // Prefer siteId from timeline info API response (stored as timelineInfo)
      let siteId: string | null = null;
      const timelineInfoStr = sessionStorage.getItem('timelineInfo');
      if (timelineInfoStr) {
        try {
          const timelineInfo = JSON.parse(timelineInfoStr);
          const fromTimeline =
            timelineInfo?.data?.siteId ??
            timelineInfo?.siteId ??
            timelineInfo?.data?.site?.id ??
            timelineInfo?.site?.id ??
            '';
          if (fromTimeline) {
            siteId = fromTimeline;
            sessionStorage.setItem('siteId', fromTimeline);
            localStorage.setItem('siteId', fromTimeline);
          }
        } catch {
          // ignore parse error
        }
      }

      // Fallback: sessionStorage/localStorage (may have been set by reservation or timeline)
      if (!siteId) {
        siteId = sessionStorage.getItem('siteId') || localStorage.getItem('siteId');
      }

      // Get companyId from sessionStorage (reservation info)
      let companyId = sessionStorage.getItem('companyId') || localStorage.getItem('companyCRMId');

      // If siteId or companyId still missing, try reservation info
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
          } catch (parseErr) {
            console.error('Error parsing reservation info:', parseErr);
          }
        }
      }
      
      if (!timelineId || !reservationId) {
        setError('Missing timeline or reservation information. Please reload the page.');
        setLoading(false);
        return;
      }

      const isRoot = true;
      const companyIdParam = companyId || '';
      const siteIdParam = siteId || '';

      const url = `https://demo.wo.instio.co/api/wo-attributes?companyId=${encodeURIComponent(companyIdParam)}&siteId=${encodeURIComponent(siteIdParam)}&isRoot=${isRoot}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('WO Attributes API response:', result);

      // Get array from response (data array with name & icon per item)
      let list: ServiceItem[] = [];
      if (result.code === 200 && result.data && Array.isArray(result.data)) {
        list = result.data;
      } else if (Array.isArray(result)) {
        list = result;
      } else if (result.data && Array.isArray(result.data)) {
        list = result.data;
      }

      // Normalize: ensure each item has name and icon from response
      setServices(
        list.map((item: ServiceItem) => ({
          ...item,
          name: item.name ?? item.Name ?? item.label ?? '',
          icon: item.icon ?? item.Icon ?? item.iconUrl ?? '',
        }))
      );
    } catch (err) {
      console.error('Error fetching services:', err);
      setError('Failed to load services. Please try again.');
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  const renderIcon = (service: ServiceItem) => {
    // Get icon from response (check both 'icon' and 'Icon' fields)
    const rawIcon = service.icon || service.Icon || service.iconUrl;
    let icon = rawIcon;
    
    // If API returns a relative path like ".tmp/images/xyz.svg", use image API endpoint
    if (icon && (icon.startsWith('.tmp/') || icon.startsWith('tmp/'))) {
      icon = `https://demo.wo.instio.co/api/wo/general/images?filename=${icon}`;
    }
    
    // If API provides icon URL
    if (icon && (icon.startsWith('http') || icon.startsWith('data:') || icon.startsWith('/'))) {
      return <img src={icon} alt={service.name || service.Name || service.label || ''} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />;
    }
    
    // If API provides SVG string
    if (icon && typeof icon === 'string' && icon.startsWith('<svg')) {
      return <div dangerouslySetInnerHTML={{ __html: icon }} style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />;
    }

    // Default fallback icon
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  };

  const getServiceName = (service: ServiceItem): string => {
    // Get name from response (check both 'name' and 'Name' fields)
    return service.name || service.Name || service.label || 'Service';
  };

  const getServiceId = (service: ServiceItem): string => {
    return service._id || service.id || getServiceName(service).toLowerCase().replace(/\s+/g, '-');
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleClear = () => {
    setNotes('');
    setSelectedService(null);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Service:', selectedService);
    console.log('Notes:', notes);
    // You can add API call here
    alert('Housekeeping request submitted successfully!');
    handleClear();
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
        <h1 className="housekeeping-title">Housekeeping</h1>
        <button className="housekeeping-call-button" aria-label="Call" onClick={() => window.location.href = 'tel:+918071700830'}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"/>
          </svg>
        </button>
      </div>

      <div className="housekeeping-content">
        <div className="housekeeping-header">
          <p className="housekeeping-subtitle">Request Housekeeping Service</p>
          <p className="housekeeping-choose-text">Select a service type.</p>
        </div>

        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#302F27' }}>
            <p>Loading services...</p>
          </div>
        ) : error ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#d32f2f' }}>
            <p>{error}</p>
            <button 
              onClick={fetchServices}
              style={{
                marginTop: '16px',
                padding: '8px 16px',
                backgroundColor: '#CAA593',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Retry
            </button>
          </div>
        ) : services.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#302F27' }}>
            <p>No services available at the moment.</p>
          </div>
        ) : (
          <div className="housekeeping-services-grid">
            {services.map((service, index) => {
              const serviceId = getServiceId(service);
              const serviceName = getServiceName(service);
              return (
                <button
                  key={service._id ?? service.id ?? String(index)}
                  className={`housekeeping-service-button ${selectedService === serviceId ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect(serviceId)}
                  aria-label={serviceName}
                >
                  <div className={`housekeeping-service-icon ${selectedService === serviceId ? 'selected' : ''}`}>
                    {renderIcon(service)}
                  </div>
                  <span className="housekeeping-service-label">{serviceName}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="housekeeping-notes-section">
          <p className="housekeeping-notes-label">Any special instructions?</p>
          <textarea
            className="housekeeping-textarea"
            placeholder="Write your instructions here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
          />
        </div>
      </div>

      <div className="housekeeping-actions">
        <button 
          className="housekeeping-clear-button"
          onClick={handleClear}
          aria-label="Clear"
        >
          Clear
        </button>
        <button 
          className="housekeeping-submit-button"
          onClick={handleSubmit}
          aria-label="Submit"
          disabled={!selectedService}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Housekeeping;
