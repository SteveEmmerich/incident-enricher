import React from 'react';
import { IonLoading } from '@ionic/react';
import { useIncidentState } from '../services/incident.provider';

export const ShowLoading = () => {
  const { loading } = useIncidentState();
  return <IonLoading isOpen={loading} message={'Loading...'} />;
};
