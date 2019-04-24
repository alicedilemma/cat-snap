import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'

// bulma components
import { Hero, Heading, Container } from 'react-bulma-components/full'

const Header = props => {
  const { dispatch } = props
  return (
    <Hero color="primary">
      <Hero.Body>
        <Container>
          <Heading size={1}>
              CatSnap
          </Heading>
          <Heading subtitle size={3}>
              Snap a cat
          </Heading>
          <Heading subtitle size={6}>
            <a onClick={() => dispatch(navigate('home'))}>HOME </a>
            <a onClick={() => dispatch(navigate('snap'))}>SNAP </a>
            <a onClick={() => dispatch(navigate('add'))}>ADD </a>
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  )
}

export default connect()(Header)
