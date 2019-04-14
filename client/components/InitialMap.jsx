import React from 'react'

import { withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps"

const InitialMap = withGoogleMap(props => {
  return (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
  )
})

export default InitialMap
