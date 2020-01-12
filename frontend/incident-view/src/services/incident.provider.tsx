import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

// We are keeping our type defs at the top of the file
//TODO: Add proper typing
type Props = { children: React.ReactNode };
export type IncidentState = {
  loading: boolean;
  data: any[] /*this should be filled out with our back end types */;
  selectedIncident: {
    address?: {
      latitude: number;
      longitude: number;
    };
  } /* this is acutally a Partial address type */;
  setData?: Function;
  setLoading?: Function;
  setSelectedIncident?: Function;
};

// Pulled this back from its own file because it makes more sense to be grouped here
const IncidentContext = createContext<IncidentState | undefined>({
  loading: false,
  data: [],
  selectedIncident: { address: { latitude: 1, longitude: 1 } },
});

const IncidentProvider = ({ children }: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching');
      setLoading(true);
      //TODO: This should be an ENV Var
      const incidents = await axios('http://localhost:3001/incidents');
      console.log(`data: ${JSON.stringify(incidents.data)}`);
      setData(incidents.data);
      setSelectedIncident(incidents.data[0]);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <IncidentContext.Provider
      value={{
        data,
        loading,
        selectedIncident,
        setData,
        setLoading,
        setSelectedIncident,
      }}
    >
      {children}
    </IncidentContext.Provider>
  );
};

const useIncidentState = () => {
  const context = useContext(IncidentContext);
  if (context === undefined) {
    throw new Error(`useIncidentState must be wrapped in an IncidentProvider`);
  }
  return context;
};

export { IncidentContext, IncidentProvider, useIncidentState };
