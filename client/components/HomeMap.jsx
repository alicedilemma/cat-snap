import React from 'react'
import { connect } from 'react-redux'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps'

import { openSnap } from '../actions'

const InitialMap = withGoogleMap(props => {
  const { dispatch, snaps } = props
  // create map markers
  const mapMarkers = snaps.map(snap => (
    <Marker onClick={() => { props.onMarkerClick(snap) }} key={snap.id} position={ { lat: snap.lat, lng: snap.lng } } >
      {snap.showInfo && (
        <InfoWindow onCloseClick={() => props.onMarkerClose(snap)}>
          <div>
            <h1 onClick={() => dispatch(openSnap(snap.id))}>{snap.name}</h1>
          </div>
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

export default connect()(InitialMap)
