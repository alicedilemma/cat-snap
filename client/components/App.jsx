import React from 'react'
import { connect } from 'react-redux'

// bulma components
import { Columns } from 'react-bulma-components/full'

// components
import Home from './Home'
import Snap from './Snap'
import Header from './Header'
import Footer from './Footer'
import NewSnapForm from './NewSnapForm'

// api
import { getSnaps } from '../api'

class App extends React.Component {
  state = {
    snap: '',
    recievedData: false,
    currentPosition: { lat: -36.8485, lng: 174.7633 }
  }

  componentDidMount () {
    getSnaps()
      .then(snaps => {
        this.getGeoLocation(() => {
          this.setState({
            snap: snaps[0],
            snaps: snaps,
            recievedData: true
          })
        })
        // console.log('app.jsx', snaps)
      })
  }

  getGeoLocation = (callback) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            currentPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }, callback)
        }
      )
    } else {
      console.log('geolocation did not work')
      callback()
    }
  }

  render () {
    const { activePage, activeSnap } = this.props
    const { recievedData, snap, snaps, currentPosition } = this.state
    return (
      <React.Fragment>
        <Header />
        <Columns>
          <Columns.Column size={2}>
          </Columns.Column>
          <Columns.Column size={8}>
            <div className="content">
              {activePage === 'home' && recievedData && <Home snaps={snaps} currentPosition={currentPosition} />}
              {activePage === 'snap' && recievedData && <Snap snapData={snaps[activeSnap - 1]} />}
              {activePage === 'add' && <NewSnapForm />}
            </div>
          </Columns.Column>
          <Columns.Column size={2}>
          </Columns.Column>
        </Columns>
        <Footer />
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    activePage: state.nav.activePage,
    activeSnap: state.nav.activeSnap
  }
}

export default connect(mapStateToProps)(App)
