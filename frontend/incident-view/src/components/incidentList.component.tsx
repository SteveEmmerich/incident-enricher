import React, { Fragment, Children } from 'react';

import { useIncidentState } from '../services/incident.provider';
import { IonList, IonItem, IonLabel } from '@ionic/react';

type ItemProps = {
  children: React.ReactNode;
  setSelectedIncident: Function | undefined;
  incident: any;
};
const IncidentItem: React.FC<ItemProps> = ({
  children,
  setSelectedIncident,
  incident,
}: ItemProps) => {
  const onClick = (_incident: any) => {
    return setSelectedIncident ? setSelectedIncident(_incident) : null;
  };
  return <IonItem onClick={onClick(incident)}>{children}</IonItem>;
};

const IncidentList = () => {
  const state = useIncidentState();
  const data: any[] = state.data as any[];
  const setSelectedIncident = state.setSelectedIncident;

  return (
    <IonList slot="end" style={{ width: '50%' }}>
      {data != null
        ? data.map((incident: any) => {
            IncidentItem({
              setSelectedIncident,
              incident,
              children: [<IonLabel>{incident}</IonLabel>],
            });
          })
        : null}
    </IonList>
  );
};

export default IncidentList;
