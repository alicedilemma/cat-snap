import React from 'react'

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

export default class App extends React.Component {
  state = {
    snap: '',
    displayHomeMap: true,
    displaySnap: false,
    displayNewSnapForm: false,
    recievedData: false
  }

  componentDidMount () {
    getSnaps()
      .then(snaps => {
        // console.log('app.jsx', snaps)
        this.setState({
          snap: snaps[0],
          snaps: snaps,
          recievedData: true
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <Columns>
          <Columns.Column size={2}>
          </Columns.Column>
          <Columns.Column size={8}>
            <div className="content">
              {this.state.displayHomeMap && this.state.recievedData && <Home snaps={ this.state.snaps } />}
              {this.state.displaySnap && this.state.recievedData && <Snap snapData={ this.state.snap } />}
              {this.state.displayNewSnapForm && <NewSnapForm />}
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
