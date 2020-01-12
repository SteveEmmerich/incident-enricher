import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import React from 'react';
import IncidentMap from '../components/incidentMap.component';
import { useIncidentState } from '../services/incident.provider';
import { ShowLoading } from '../components/loadingSpinner.component';
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
      <IonContent className="ion-padding" fullscreen>
        <ShowLoading></ShowLoading>
        <IonGrid style={{ height: '100%' }}>
          <IonRow style={{ height: '100%' }}>
            <IonCol size="6">
              <IncidentMap latitude={latitude} longitude={longitude} />
            </IonCol>
            <IonCol size="6">
              <IncidentList></IncidentList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
