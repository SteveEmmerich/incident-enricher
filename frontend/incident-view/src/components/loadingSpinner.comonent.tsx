import React, { useContext } from 'react';
import { IonLoading } from '@ionic/react';
import { IncidentContext } from '../services/api.service';

export const ShowLoading = () => {
  const { loading } = useContext(IncidentContext);
  return <IonLoading isOpen={loading} message={'Loading...'} />;
};
