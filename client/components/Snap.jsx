import React from 'react'

import MapContainer from './MapContainer'

class Snap extends React.Component {
  tagsData=[ 'cool', 'grey' ]
  tags = this.tagsData.map(tag => {
    return <li key={tag}>{tag}</li>
  })

  componentDidMount () {
    console.log('snap component props:', this.props)
  }

  componentDidUpdate () {
    console.log('snap component props:', this.props)
  }

  render () {
    return (
      <div className="snap">
        <h1>{this.props.snapData.name}</h1>
        <img className="snap-image" src={this.props.snapData.image} />
        <div className="snap-stats">
          <h3>Friendliness: {this.props.snapData.friendliness}</h3>
        </div>
        <div className="snap-story">
          <p>{this.props.snapData.story}</p>
        </div>
        <div className="snap-tags">
          <ul>
            {this.tags}
          </ul>
        </div>
        <div className="map">
          <MapContainer position={{ lat: this.props.snapData.lat, lng: this.props.snapData.lng }} />
        </div>
      </div>
    )
  }
}

export default Snap
