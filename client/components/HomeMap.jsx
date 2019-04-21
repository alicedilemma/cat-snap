import React from 'react'

import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'

const InitialMap = withGoogleMap(props => {
  // center map on first marker
  const centerPos = { lat: props.snaps[0].lat, lng: props.snaps[0].lng }

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
      defaultCenter={centerPos}
    >
      {mapMarkers}
    </GoogleMap>
  )
})

export default InitialMap
