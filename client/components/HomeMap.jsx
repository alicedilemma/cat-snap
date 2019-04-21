import React from 'react'

import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'

const InitialMap = withGoogleMap(props => {
  // create map markers
  const mapMarkers = props.snaps.map(snap => (
    <Marker onClick={() => { props.onMarkerClick(snap) }} key={snap.id} position={ { lat: snap.lat, lng: snap.lng } } >
      {snap.showInfo && (
        <InfoWindow onCloseClick={() => props.onMarkerClose(snap)}>
          <h1>{snap.name}</h1>
        </InfoWindow>
      )}

    </Marker>

  ))

  return (
    <GoogleMap
      key={new Date().getTime()}
      ref={props.onMapLoad}
      defaultZoom={16}
      defaultCenter={props.currentPosition}
    >
      {mapMarkers}
    </GoogleMap>
  )
})

export default InitialMap
