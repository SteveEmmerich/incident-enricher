import React, { useEffect } from 'react';

import { useIncidentState } from '../services/incident.provider';
import { IonList, IonItem, IonLabel, IonListHeader } from '@ionic/react';

import { Incident } from '../models/incident.model';

type ItemProps = {
  children: React.ReactNode;
  setSelectedIncident: Function | undefined;
  incident: any;
};

// Component to render items
const IncidentItem: React.FC<ItemProps> = ({
  children,
  setSelectedIncident,
  incident,
}: ItemProps) => {
  const onClick = (_incident: any) => {
    const fn = setSelectedIncident ? setSelectedIncident : () => {};

    return fn(_incident);
  };
  return <IonItem onClick={onClick(incident)}>{children}</IonItem>;
};

// Component to render list
const IncidentList = () => {
  const state = useIncidentState();
  const data: any[] = state.data as any[];
  const setSelectedIncident = state.setSelectedIncident;

  const listItems = data?.map((incident: Incident) => (
    <IncidentItem
      key={incident.id}
      incident={incident}
      setSelectedIncident={setSelectedIncident}
    >
      <IonLabel>{incident.description.comments}</IonLabel>
    </IncidentItem>
  ));

  return (
    <IonList style={{ width: '100%', height: '100%' }}>
      <IonListHeader>
        <IonLabel>Incidents</IonLabel>
      </IonListHeader>
      {data ? listItems : null}
    </IonList>
  );
};

export default IncidentList;
