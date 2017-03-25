import React from 'react'
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline
} from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withScriptjs(withGoogleMap(props => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      onClick={props.onMapClick}
    >
      {props.markers.map((marker, i) => {
        return (<Marker key={i} position={{ lat: marker.location.coordinates[0], lng: marker.location.coordinates[1] }} onClick={(e) => props.markerClick(e, marker)}/>);
      })}
      { props.polyline && props.polyline.length > 1 ? <Polyline path={props.polyline.map((coord) => { return { lat: coord[0], lng: coord[1] }; })} />: false }
    </GoogleMap>);
}));

export default GettingStartedGoogleMap
