import React from 'react'

import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'

const InitialMap = withGoogleMap(props => {
  // create map markers
  const mapMarkers = props.markers.map(marker => <Marker key={marker.position} position={marker.position} />)

  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={16}
      defaultCenter={props.markers[0].position}
    >
      {mapMarkers}
    </GoogleMap>
  )
})

export default InitialMap
