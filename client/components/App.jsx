import React from 'react'

import Snap from './Snap'
import Header from './Header'

import { getSnaps } from '../api'

// import testSnapData from '../../data/testData'

class App extends React.Component {
  state = {
    snap: ''
  }

  componentDidMount () {
    getSnaps()
      .then(snaps => {
        console.log('app.jsx', snaps)
        this.setState({
          snap: snaps[0]
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <div className="content">
          <Snap snapData={ this.state.snap } />
        </div>
      </React.Fragment>
    )
  }
}

export default App
