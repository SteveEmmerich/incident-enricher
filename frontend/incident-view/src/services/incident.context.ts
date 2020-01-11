import React, { createContext } from 'react';

const IncidentContext = createContext({
  loading: false,
  data: [],
  selectedIncident: { address: { latitude: 1, longitude: 1 } },
});
export default IncidentContext;
