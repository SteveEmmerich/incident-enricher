// TODO: add a map that shows the location of an incident.
import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { useIncidentState } from '../services/incident.provider';
import { IonLabel } from '@ionic/react';

// TODO: make this an ENV var
const MapsApiKey = `AIzaSyALuawajpAZybTMArJwWB6SPJKCSgLnUC8`;

// TODO: Move this, maybe styled components?
const mapStyles = {
  width: '100%',
  height: '100%',
};

// Set up the type of our props
type Props = {
  latitude: number | undefined;
  longitude: number | undefined;
  google: any;
};

// Originally this was an FC the docs for this component all use normal components
// Replaced class component back to FC because it was not useful to be a class component
const MapContainer: React.FC<Props> = props => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  // This is a blank object
  const [marker, setMarker] = useState<google.maps.Marker>();
  const { selectedIncident } = useIncidentState();
  // TODO: improve this check, its a bit hacky
  let { longitude, latitude } = props;
  longitude = longitude ? longitude : 1;
  latitude = latitude ? latitude : 1;

  // We are ignoring the containerStyle here because the type def for this component is incorrect.
  return (
    <Map
      // @ts-ignore
      containerStyle={mapStyles}
      google={props.google}
      zoom={8}
      center={{ lat: latitude, lng: longitude }}
    >
      <Marker
        onClick={(_, marker) => {
          setShowInfoWindow(!showInfoWindow);
          setMarker(marker);
        }}
        position={{ lat: latitude, lng: longitude }}
      />
      {/* Again there is a miss typing here, marker on 
         the info window component must be of type marker.
         However the marker onClick sends the marker object as a 
         type of Marker | undefined. We are going to remove the ts check here
         */}
      <InfoWindow
        visible={showInfoWindow}
        // @ts-ignore
        marker={marker}
      >
        <IonLabel>{selectedIncident.id}</IonLabel>
      </InfoWindow>
    </Map>
  );
};

const IncidentMap = GoogleApiWrapper({
  apiKey: MapsApiKey,
})(MapContainer);

export default IncidentMap;
