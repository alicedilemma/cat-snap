import React from 'react'

import HomeMap from './HomeMap'

class MapContainer extends React.Component {
  state = {
    snaps: this.props.snaps.map(snap => {
      snap.showInfo = false
      return snap
    }),
    currentPosition: this.props.currentPosition
  }

  handleMarkerClick = targetSnap => {
    this.setState({
      snaps: this.state.snaps.map(snap => {
        if (snap.id === targetSnap.id) {
          snap.showInfo = true
        }
        return snap
      }),
      currentPosition: {
        lat: targetSnap.lat,
        lng: targetSnap.lng
      }
    })
  }

  handleMarkerClose = targetSnap => {
    this.setState({
      snaps: this.state.snaps.map(snap => {
        if (snap.id === targetSnap.id) {
          snap.showInfo = false
        }
        return snap
      })
    })
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <HomeMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          snaps={this.state.snaps}
          currentPosition={this.state.currentPosition}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
        />
      </div>
    )
  }
}

export default MapContainer
