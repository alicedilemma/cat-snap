import React from 'react'

// bulma components
import { Heading } from 'react-bulma-components/full'

// components
import HomeMapContainer from './HomeMapContainer'

export default class Home extends React.Component {
  state = {
    snaps: this.props.snaps,
    currentPosition: this.props.currentPosition
  }

  render () {
    return (
      <div className="home">
        <Heading>Home</Heading>
        <div className="map">
          <HomeMapContainer currentPosition={this.state.currentPosition} snaps={this.state.snaps} />
        </div>
      </div>
    )
  }
}
