import React from 'react'

import Snap from './Snap'
import Header from './Header'

import testSnapData from '../../data/testData'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <Snap snapData={ testSnapData } />
      </div>
    </React.Fragment>
  )
}

export default App
