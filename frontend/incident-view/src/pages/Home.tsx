import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useContext } from 'react';
import IncidentMap from '../components/incidentMap.component';
import { IncidentContext } from '../services/api.service';

const Home: React.FC = () => {
  const { selectedIncident } = useContext(IncidentContext);
  const { latitude, longitude } = selectedIncident.address;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IncidentMap latitude={latitude} longitude={longitude} />
        <p>
          If you get lost, the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
