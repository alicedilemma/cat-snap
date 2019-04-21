import React from 'react'

import InitialMap from './InitialMap'

class MapContainer extends React.Component {
  state = {
    markers: [{
      position: {
        lat: Number(this.props.position.lat),
        lng: Number(this.props.position.lng)
      }
    }]
  }

  componentDidUpdate (prevProps) {
    if (prevProps.position.lng !== this.props.position.lng) {
      console.log(this.props.position.lng)
      this.setState({
        markers: [{
          position: {
            lat: Number(this.props.position.lat),
            lng: Number(this.props.position.lng)
          }
        }]
      })
    }
  }

  render () {
    return (
      <div style={{ height: '100%' }}>
        <InitialMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          markers={this.state.markers}
        />
      </div>
    )
  }
}

export default MapContainer
