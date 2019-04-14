import React from 'react'

import InitialMap from './InitialMap'

class MapContainer extends React.Component {

  render() {
    return (
      <div style={{ height: '100%' }}>
        <InitialMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
        />
      </div>
    )
  }
}

export default MapContainer