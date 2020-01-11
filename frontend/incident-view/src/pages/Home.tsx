import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import IncidentMap from '../components/incidentMap.component';
import { useIncidentState, IncidentState } from '../services/incident.provider';
import IncidentList from '../components/incidentList.component';
const Home: React.FC = () => {
  const incidentState = useIncidentState();
  // TODO: Fix the Map component to use the state instead of props
  const latitude = incidentState.selectedIncident.address?.latitude;
  const longitude = incidentState.selectedIncident.address?.longitude;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IncidentMap latitude={latitude} longitude={longitude} />
        <IncidentList></IncidentList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
