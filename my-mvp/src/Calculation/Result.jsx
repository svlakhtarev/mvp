import React, {Component} from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react';


export class Result extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        />
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC_V9_5I2A-wfQgexfJLNQ7UNW0Lq7gVfM'
})(Result);