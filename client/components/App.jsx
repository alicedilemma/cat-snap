import React from 'react'

// bulma components
import { Columns } from 'react-bulma-components/full'

// components
import Snap from './Snap'
import Header from './Header'
import { Footer } from './Footer'
import NewSnapForm from './NewSnapForm'

// api
import { getSnaps } from '../api'

export default class App extends React.Component {
  state = {
    snap: '',
    displaySnap: false,
    displayNewSnapForm: true,
    recievedData: false
  }

  componentDidMount () {
    getSnaps()
      .then(snaps => {
        // console.log('app.jsx', snaps)
        this.setState({
          snap: snaps[0],
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
