// TODO: add a map that shows the location of an incident.
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// TODO: make this an ENV var
const MapsApiKey = `AIzaSyALuawajpAZybTMArJwWB6SPJKCSgLnUC8`;

// TODO: Move this, maybe styled components?
/*const mapStyles = {
  width: '100%',
  height: '100%',
};*/

const map = (props: any) => {
  return (
    <Map
      google={props.google}
      zoom={8}
      initialCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker position={{ lat: props.latitude, lng: props.longitude }} />
    </Map>
  );
};

const IncidentMap = GoogleApiWrapper({
  apiKey: MapsApiKey,
})(map);

export default IncidentMap;
