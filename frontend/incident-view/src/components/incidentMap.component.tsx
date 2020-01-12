// TODO: add a map that shows the location of an incident.
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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
class MapContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    // TODO: improve this check, its a bit hacky
    let { longitude, latitude } = this.props;
    longitude = longitude ? longitude : 1;
    latitude = latitude ? latitude : 1;

    // We are ignoring the containerStyle here because the type def for this component is incorrect.
    return (
      <Map
        // @ts-ignore
        containerStyle={mapStyles}
        google={this.props.google}
        zoom={8}
        center={{ lat: latitude, lng: longitude }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Map>
    );
  }
}

const IncidentMap = GoogleApiWrapper({
  apiKey: MapsApiKey,
})(MapContainer);

export default IncidentMap;
