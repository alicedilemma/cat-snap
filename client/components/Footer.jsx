import React from 'react'

// bulma components
import { Footer as BulmaFooter, Container, Content } from 'react-bulma-components/full'

const Footer = () => {
  return (
    <BulmaFooter>
      <Container>
        <Content style={{ textAlign: 'center' }}>
          <p>
            <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed{' '}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </Content>
      </Container>
    </BulmaFooter>
  )
}

export default Footer