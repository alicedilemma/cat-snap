import React from 'react'
import { connect } from 'react-redux'

import { navigate } from '../actions'

// bulma components
import { Hero, Heading, Container, Navbar } from 'react-bulma-components/full'

const Header = props => {
  const { dispatch } = props
  return (
    <Hero className='hero'>
      <Hero.Body>
        <Container>
          <Heading size={1}>
              CatSnap
          </Heading>
          <Heading subtitle size={3}>
              Snap a cat
          </Heading>
        </Container>
      </Hero.Body>
      <Container>
        <Navbar>
          <Navbar.Item renderAs='a' onClick={() => dispatch(navigate('home'))}>HOME</Navbar.Item>
          <Navbar.Item renderAs='a' onClick={() => dispatch(navigate('snap'))}>SNAP</Navbar.Item>
          <Navbar.Item renderAs='a' onClick={() => dispatch(navigate('add'))}>ADD</Navbar.Item>
        </Navbar>
      </Container>
    </Hero>
  )
}

export default connect()(Header)
