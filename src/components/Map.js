import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import * as storeData from '../../store_directory.json';

function Map(){
  return(
  <GoogleMap 
  defaultZoom={12} 
  defaultCenter={{lat:19.432608, lng:-99.133209}}>

<Marker position={{lat:19.432608, lng:-99.133209}}></Marker>
      
  </GoogleMap>
)
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function storesMap(){
  return (
    <div style={{ height: "100%", width: "100%"}}>
      <WrappedMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A`} 
      loadingElement={<div style={{ height: "100%" }}/> }
      containerElement={<div style={{ height: "100%" }}/>}
      mapElement={<div style={{ height: "100%" }}/> }
      />
    </div>
  )
} 



