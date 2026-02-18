/**
 * Environment configuration
 * Access environment variables with proper fallbacks
 */

export const env = {
  CRM_URL: process.env.REACT_APP_CRM_URL || 'https://demo.crm.instio.co/',
  WO_URL: process.env.REACT_APP_WO_URL || 'https://demo.wo.instio.co/api/',
  PMS_URL: process.env.REACT_APP_PMS_URL || 'https://demo.pms.instio.co/api/pms/v2',
  IRD_URL: process.env.REACT_APP_IRD_URL || 'https://demo.order.instio.co/api/',
  LOGBOOK_URL: process.env.REACT_APP_LOGBOOK_URL || 'https://demo.logbook.instio.co/api/',
  GEM_URL: process.env.REACT_APP_GEM_URL || 'https://demo.gem.instio.co/api/',
  FEEDBACK_URL: process.env.REACT_APP_FEEDBACK_URL || 'https://demo.experience.instio.co/api/',
};

export default env;
