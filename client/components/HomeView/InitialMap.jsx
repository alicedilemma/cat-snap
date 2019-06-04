import React from 'react'

import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'

const InitialMap = withGoogleMap(props => {
  // center map on first marker
  const centerPos = props.markers[0].position

  // create map markers
  const mapMarkers = props.markers.map(marker => <Marker key={marker.position} position={marker.position} />)

  return (
    <GoogleMap
      key={new Date().getTime()}
      ref={props.onMapLoad}
      defaultZoom={16}
      defaultCenter={centerPos}
    >
      {mapMarkers}
    </GoogleMap>
  )
})

export default InitialMap
