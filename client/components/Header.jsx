import React from 'react'

// bulma components
import { Hero, Heading, Container } from 'react-bulma-components/full'

const Header = () => {
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
        </Container>
      </Hero.Body>
    </Hero>
  )
}

export default Header
