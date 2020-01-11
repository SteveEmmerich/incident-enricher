import React, {
  useState,
  useEffect,

  FunctionComponent,
} from 'react';
import IncidentContext from './incident.context';
import axios from 'axios';


export const IncidentProvider: React.FC= ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const incidents = await axios('http://localhost:3000');
      setData(incidents);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (<IncidentContext.Provider
      value={{
        data,
        loading,
        selectedIncident,
        setData,
        setLoading,
        setSelectedIncident
      }})>
      {children}
      </IncidentContext.Provider>)

};
