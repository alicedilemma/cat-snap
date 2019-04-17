import React from 'react'

import Snap from './Snap'
import Header from './Header'
import NewSnapForm from './NewSnapForm'

import { getSnaps } from '../api'

// import testSnapData from '../../data/testData'

class App extends React.Component {
  state = {
    snap: '',
    displaySnap: false,
    displayNewSnapFrom: true
  }

  componentDidMount () {
    getSnaps()
      .then(snaps => {
        // console.log('app.jsx', snaps)
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
          {this.state.displaySnap && <Snap snapData={ this.state.snap } />}
          {this.state.displayNewSnapFrom && <NewSnapForm />}
        </div>
      </React.Fragment>
    )
  }
}

export default App
